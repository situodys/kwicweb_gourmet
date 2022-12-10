import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faStar} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export const RestaurantRecommendation = (props) => {
    const {topLikesList, topRatingsList} = props;

    return (
        <div className="w-100 h-100 ">
            <div
                className="card"
                style={{
                    border: "0px",
                    borderRadius: "20px",
                    boxShadow: "0px 10px 10px 0px rgba(50,50,50,0.4)",
                    minHeight: "100%",
                }}
            >
                <div class="card-body">
                    <div
                        style={{
                            paddingRight: "1rem",
                            paddingLeft: "1rem",
                        }}
                    >
                        <div className="row">
                            <div className="col-12">
                                <div class="d-flex flex-column h-100 ">
                                    <div className="w-100">
                                        <div class="d-flex align-items-start flex-column h-100">
                                            <div
                                                className="px-4 py-1"
                                                style={{
                                                    cursor: "default",
                                                    color: "white",
                                                    borderRadius: "27px",
                                                    backgroundColor: "#F65390",
                                                    fontSize: "10px",
                                                }}
                                            >
                                                좋아요 TOP 5
                                                <FontAwesomeIcon
                                                    icon={faHeart}
                                                    size="sm"
                                                    className="ml-2"
                                                />{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-2"></hr>
                                    {topLikesList.length !== 0 && topLikesList.map((element, idx) => {
                                        const url = `/restaurant/${element.simpleRestaurantResponse.restaurantId}`;

                                        return (
                                            <Link style={{textDecoration: "none", color: "black"}}
                                                  to={url}
                                                  state={{restaurantId: element.simpleRestaurantResponse.restaurantId}}
                                                  className="d-flex" key={idx}>
                                                <div
                                                    className="card-text mr-2"
                                                    style={{fontSize: "16px"}}
                                                >
                                                    <b>{idx + 1}. </b>
                                                    <b>{element.simpleRestaurantResponse.name}</b>
                                                </div>
                                                <div
                                                    className="px-2 my-1"
                                                    style={{
                                                        color: "white",
                                                        borderRadius: "5px",
                                                        backgroundColor: "#F65390",
                                                        fontSize: "12px",
                                                    }}
                                                >
                                                    {element.likeCount}
                                                </div>
                                            </Link>
                                        )
                                    })
                                    }

                                    <div className="w-100 mt-4">
                                        <div class="d-flex align-items-start flex-column h-100">
                                            <div
                                                className="px-4 py-1"
                                                style={{
                                                    cursor: "default",
                                                    color: "white",
                                                    borderRadius: "27px",
                                                    backgroundColor: "orange",
                                                    fontSize: "10px",
                                                }}
                                            >
                                                리뷰 평점 TOP 5
                                                <FontAwesomeIcon
                                                    icon={faStar}
                                                    size="sm"
                                                    className="ml-2"
                                                />{" "}
                                            </div>
                                        </div>
                                    </div>

                                    <hr className="my-2"></hr>
                                    {topRatingsList.length !== 0 && (
                                        <>
                                            <div className="">
                                                {topRatingsList.map((element, idx) => {
                                                    const url = `/restaurant/${element.simpleRestaurantResponse.restaurantId}`;

                                                    return (
                                                        <Link
                                                            style={{textDecoration: "none", color: "black"}}
                                                            to={url}
                                                            state={{restaurantId: element.simpleRestaurantResponse.restaurantId}}
                                                            className="d-flex">
                                                            <div
                                                                key={idx}
                                                                className="card-text mr-2"
                                                                style={{fontSize: "16px"}}
                                                            >
                                                                <b>{idx + 1}. </b>
                                                                <b>{element.simpleRestaurantResponse.name}</b>
                                                            </div>
                                                            <div
                                                                className="px-2 my-1"
                                                                style={{
                                                                    color: "white",
                                                                    borderRadius: "5px",
                                                                    backgroundColor: "orange",
                                                                    fontSize: "12px",
                                                                }}
                                                            >
                                                                {element.rating}
                                                            </div>
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
