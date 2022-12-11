import {ReactComponent as Heart} from "../../../assets/images/heart-fill.svg";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import imgUrl from "../../../assets/data.json"

import "../../../assets/styles.scss";
import star from "../../common/star";
import {useEffect, useState} from "react";
import jwt_decode from "jwt-decode";
import customAxios from "../../../api/customAxios";

const RestaurantCard = (props) => {

    const {restaurant} = props;

    const [isLike, setIsLike] = useState(restaurant.isLike);
    const [likeCount, setLikeCount] = useState(restaurant.likeCount);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const fullAddress = restaurant.address.city + "\n" +
        restaurant.address.street + "\n" +
        restaurant.address.zipcode;

    useEffect(() => {
        checkAuthenticated();
    }, []);

    const checkAuthenticated = () => {
        let atk = window.localStorage.getItem("atk");
        if(!atk) {
            setIsAuthenticated(false);
            return;
        }
        let jwtDecode = jwt_decode(atk);
        if (jwtDecode.exp * 1000 <= Date.now()) {
            window.localStorage.clear();
            setIsAuthenticated(false);
            return;
        }
        setIsAuthenticated(true);
        return;
    }

    const getMemberId = () =>{
        let payload = jwt_decode(window.localStorage.getItem("atk"));
        return payload.sub;
    }

    const createLikePostData = ()=>{
        let data = {};
        data.memberId = getMemberId();
        data.restaurantId = restaurant.restaurantId;
        return data;
    }

    const handleLikeButton = async(e) => {
        e.preventDefault();

        if (isLike === true) {
            await cancelLike();
        }
        if(isLike === false){
            await addLike();
        }
        setIsLike(!isLike);
    }

    const handleLikeIconColor = ()=>{
        if (isLike) {
            return '#cc0000';
        }
        return '';
    }

    const cancelLike = async() => {
        let response = await customAxios.post(`/likes/cancel`, createLikePostData());
        setLikeCount(response.data);
    }

    const addLike = async () => {
        let response = await customAxios.post(`/likes/add`, createLikePostData());
        setLikeCount(response.data);
    }



    return (
        <div
            className="card"
            style={{
                width: "70rem",
                border: "0px",
                borderRadius: "20px",
                boxShadow: "0px 10px 10px 0px rgba(50,50,50,0.4)",
            }}
        >
            <div class="card-body mb-4 py-5">
                <div
                    style={{
                        paddingRight: "7rem",
                        paddingLeft: "7rem",
                    }}
                >
                    <div className="d-flex">
                        <Badge pill bg="info" className="mr-2">
                            {restaurant.type}
                        </Badge>{" "}
                    </div>
                    <hr className="my-2"></hr>
                    <div className="row">
                        <div className="col-3">
                            <img
                                src={imgUrl['data'][restaurant.restaurantId % 5].imageUrl}
                                style={{borderRadius: "20px", height: '13rem'}}
                                width="100%"
                                alt="resturant"
                            ></img>
                        </div>
                        <div className="col-6">
                            <div class="d-flex flex-column h-100">
                                <div>
                                    <h4 class="card-title mb-0">
                                        <strong>{restaurant.name}</strong>
                                    </h4>
                                    <span className="mr-3">
                                        {star(restaurant.rating, "lg")}
                                    </span>
                                    <span style={{fontSize: "15pt"}}>{restaurant.rating}</span>
                                    <span style={{fontSize: "8pt"}} className="ml-1">
                                        ({restaurant.reviewCount}명 작성)
                                    </span>
                                    <hr/>
                                    <p
                                        className="px-4 py-1 mb-2 mx-1"
                                        style={{
                                            width: "max-content",
                                            cursor: "default",
                                            color: "white",
                                            borderRadius: "27px",
                                            backgroundColor: "#28a745",
                                            alignItems: "center",
                                            fontSize: "15px",
                                        }}
                                    >
                                        영업중
                                    </p>
                                    <p class="card-text">영업
                                        시간 {restaurant.runningTime.openAt} - {restaurant.runningTime.closeAt}</p>
                                </div>
                                <div class="mt-auto">
                                    <p class="card-text" style={{width: "160px", whiteSpace: 'pre-line'}}>
                                        {fullAddress}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div class="d-flex align-items-end flex-column h-100">
                                <div class="p-2">
                                    <Button
                                        disabled={!isAuthenticated ? true:false}
                                        className="btn btn-heart btn-lg px-5"
                                        style={{borderRadius: "27px"}}
                                        onClick={handleLikeButton}
                                    >
                                        <Heart style={{fill: handleLikeIconColor()}}/> {likeCount}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
