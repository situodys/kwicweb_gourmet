import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import star from "../common/star";

export const RestaurantSmallCard = (props) => {
    const {restaurant,imgURL} = props;

    const fullAddress = restaurant.simpleRestaurantResponse.address.city +" "+
        restaurant.simpleRestaurantResponse.address.street +" "+
        restaurant.simpleRestaurantResponse.address.zipcode;

    const url = `/restaurant/${restaurant.simpleRestaurantResponse.restaurantId}`;

  return (
      <Col className="col-4 mb-3">
        <Link
          to={url}
          state={{restaurantId: restaurant.simpleRestaurantResponse.restaurantId}}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div
            className="card"
            style={{
              minWidth: "260px",
              width: "100%",
              border: "0px",
              borderRadius: "20px",
              boxShadow: "0px 10px 10px 0px rgba(50,50,50,0.4)",
            }}
          >
            <div class="card-body py-4">
              <div
                style={{
                  paddingRight: "1rem",
                  paddingLeft: "1rem",
                }}
              >
                <div className="d-flex">
                  <Badge pill bg="info" className="mr-2">
                      {restaurant.simpleRestaurantResponse.restaurantType}
                  </Badge>
                </div>
                <hr className="my-2"></hr>
                <div className="row">
                  <div className="col-12">
                    <img
                      src={imgURL}
                      style={{
                        borderRadius: "20px",
                        objectFit: "cover",
                        aspectRatio: "16/9",
                      }}
                      width="100%"
                      alt="resturant"
                    ></img>
                  </div>
                  <div className="col-12">
                    <div class="d-flex flex-column h-100 pt-2">
                      <div style={{ fontSize: "16px", lineHeight: "20px" }}>
                        <strong>{restaurant.simpleRestaurantResponse.name}</strong>
                      </div>
                      <span className="mr-2">
                        {star(restaurant.rating, "sm")}
                      </span>
                      <div class="pt-1">
                        <h6
                          class="card-text"
                          style={{ fontSize: "10px", width: "80%" }}
                        >
                            {fullAddress}
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div class="d-flex align-items-end flex-column h-100">
                      <div class="p-2 pt-4">
                        <div
                          className="px-4 py-1 mb-2 mx-1"
                          style={{
                            float: "right",
                            cursor: "default",
                            color: "white",
                            borderRadius: "27px",
                            backgroundColor: "#28a745",
                            alignItems: "center",
                            fontSize: "10px",
                          }}
                        >
                          OPEN
                        </div>

                        <div
                          className="px-4 py-1 mb-2 mx-1"
                          style={{
                            float: "right",
                            cursor: "default",
                            color: "white",
                            borderRadius: "27px",
                            backgroundColor: "#F65390",
                            display: "inline-flex",
                            alignItems: "center",
                            fontSize: "10px",
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faHeart}
                            size="sm"
                            className="mr-2"
                          />{" "}
                            {restaurant.likeCount}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </Col>
  );
};
