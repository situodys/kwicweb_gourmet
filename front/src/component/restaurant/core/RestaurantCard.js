import {ReactComponent as Heart} from "../../../assets/images/heart-fill.svg";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import imgUrl from "../../../assets/data.json"

import "../../../assets/styles.scss";
import star from "../../common/star";
import {useState} from "react";

const RestaurantCard = (props) => {

    const {restaurant} = props;

    const [isLike, setIsLike] = useState();

    const fullAddress = restaurant.address.city +"\n"+
        restaurant.address.street +"\n"+
        restaurant.address.zipcode;

    return (
        <div
            className="card"
            style={{
                minWidth: "60rem",
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
                                    <p class="card-text">오픈시간 {restaurant.runningTime.openAt} / 마감 시간
                                        {restaurant.runningTime.closeAt}</p>
                                </div>
                                <div class="mt-auto">
                                    <p class="card-text"  style={{width: "160px", whiteSpace: 'pre-line'}}>
                                        {fullAddress}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div class="d-flex align-items-end flex-column h-100">
                                <div class="p-2">
                                    <Button
                                        className="btn btn-heart btn-lg px-5"
                                        style={{borderRadius: "27px"}}
                                    >
                                        <Heart/> {restaurant.likeCount}
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
