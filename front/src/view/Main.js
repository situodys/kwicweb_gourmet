import {RestaurantList} from "../component/main/RestaurantList";
import {RestaurantRecommendation} from "../component/main/RestaurantRecommendation";
import {Map} from "../component/main/Map";
import {useCallback, useEffect, useState} from "react";
import customAxios from "../api/customAxios";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/esm/Container";
import {useInView} from "react-intersection-observer";

export default function Main() {
    const [topLikes, setTopLikes] = useState([]);
    const [topRatings, setTopRatings] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [lastId, setLastId] = useState();
    const [ref, inView] = useInView();

    const init = async () => {
        try {
            const responseLikesTop5 = await customAxios.get("/restaurants/likes/top");
            const responseRatesTop5 = await customAxios.get("/restaurants/reviews/rating/top");
            const responseRestaurants = await customAxios.get("/restaurants");
            setTopLikes(responseLikesTop5.data);
            setTopRatings(responseRatesTop5.data);
            setRestaurants(responseRestaurants.data.data);
            setLastId(responseRestaurants.data.lastId);
        } catch (err) {
            if (err) {
                console.log(err);
            }
        }
    };

    const fetch = async () => {
        try {
            if (!lastId) return;
            const response = await customAxios.get(`/restaurants?lastId=${lastId}`);
            setRestaurants((prevRestaurants) => [...prevRestaurants, ...response.data.data]);
            setLastId(response.data.lastId);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        void init();
    }, []);

    useEffect(() => {
        if(inView && lastId !==0){
            fetch();
        }
    }, [inView])

    return (
        <div
            className="d-flex Login-body justify-content-center"
            style={{height: "93vh", overflow: "hidden"}}
        >
            <Container fluid style={{maxWidth: "90rem", padding: "4vh"}}>
                <div className="row h-100">
                    <div className="col-4">
                        <div className="container-fluid h-100">
                            <div className="row mb-4">
                                <Map/>
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
                            ></input>
                            <button
                                class="btn btn btn-primary"
                                type="button"
                                id="button-addon2"
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
