import {RestaurantList} from "../component/main/RestaurantList";
import {RestaurantRecommendation} from "../component/main/RestaurantRecommendation";
import {Map} from "../component/main/Map";
import {useEffect, useState} from "react";
import customAxios from "../api/customAxios";
import Container from "react-bootstrap/esm/Container";
import {useInView} from "react-intersection-observer";

export default function Main() {
    const [topLikes, setTopLikes] = useState([]);
    const [topRatings, setTopRatings] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [lastId, setLastId] = useState();
    const [ref, inView] = useInView();
    const [searchInput, setSearchInput] = useState("");

    const [addresses, setAddresses] = useState([]);

    const init = async () => {
        try {
            const responseLikesTop5 = await customAxios.get("/restaurants/likes/top");
            const responseRatesTop5 = await customAxios.get("/restaurants/reviews/rating/top");
            const responseRestaurants = await customAxios.get("/restaurants");
            setTopLikes(responseLikesTop5.data);
            setTopRatings(responseRatesTop5.data);
            setRestaurants(responseRestaurants.data.data);
            setLastId(responseRestaurants.data.lastId);
            getAddresses(responseRestaurants.data.data);
        } catch (err) {
            if (err) {
                console.log(err);
            }
        }
    };

    const fetch = async (isSearch) => {
        try {
            let response;
            if(isSearch){
                response= await customAxios.get(`/restaurants?lastId=&name=${searchInput}`);
            }
            else response= await customAxios.get(`/restaurants?lastId=${lastId}&name=${searchInput}`);
            setRestaurants((prevRestaurants) => [...prevRestaurants, ...response.data.data]);
            setLastId(response.data.lastId);
            getAddresses(response.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        void init();
    }, []);

    useEffect(() => {
        if (lastId && inView && lastId !== 0) {
            void fetch();
        }
    }, [inView]);

    const handleInput = (e) =>{
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    const handleSearchButton = (e) =>{
        e.preventDefault();
        setLastId(null);
        setRestaurants([]);
        void fetch(true);
    }

    const getAddresses =(restaurants)=>{
        let fetchedAddresses = [];
        restaurants?.map((restaurant, idx) => {
            fetchedAddresses.push(restaurant.simpleRestaurantResponse);
        });
        setAddresses(fetchedAddresses);
    }

    return (
        <div
            className="d-flex Login-body justify-content-center"
            style={{height: "91vh", overflow: "hidden"}}
        >
            <Container fluid style={{maxWidth: "90rem", padding: "4vh"}}>
                <div className="row h-100">
                    <div className="col-4">
                        <div className="container-fluid h-100">
                            <div className="row mb-4">
                                <Map addresses ={addresses}/>
                            </div>
                            <div className="row">
                                <RestaurantRecommendation
                                    topLikesList={topLikes}
                                    topRatingsList={topRatings}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-8 h-100">
                        <div className="input-group mb-3 cshadow-lg">
                            <input
                                type="search"
                                class="form-control"
                                placeholder=""
                                onChange={handleInput}
                            ></input>
                            <button
                                class="btn btn btn-primary"
                                type="button"
                                id="button-addon2"
                                onClick={handleSearchButton}
                            >
                                Search
                            </button>
                        </div>
                        <RestaurantList data={restaurants} refProp={ref}/>
                    </div>
                </div>
            </Container>
        </div>
    );
}
