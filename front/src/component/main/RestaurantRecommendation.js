import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { ReactComponent as Heart } from "../../assets/images/heart-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Badge from "react-bootstrap/Badge";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const RestaurantRecommendation = ({ topLikes, topRatings }) => {
  const [topLikesList, setTopLikesList] = useState([]);
  const [topRatingsList, setTopRatingsList] = useState([]);

  useEffect(() => {
    (async () => {
      const responseTopLikes = await topLikes;
      const responseTopRatings = await topRatings;

      setTopLikesList(topLikes);
      setTopRatingsList(topRatings);
    })();
  }, [topLikes, topRatings]);

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
                        TOP 5
                        <FontAwesomeIcon
                          icon={faHeart}
                          size="sm"
                          className="ml-2"
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <hr className="my-2"></hr>
                  {topLikesList.length !== 0 && (
                    <>
                      <div className="ml-auto">
                        {topLikesList.map((element) => (
                          <>
                            <div className="d-flex align-items-end">
                              <div
                                className="card-text mr-2"
                                style={{ fontSize: "16px" }}
                              >
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
                            </div>
                          </>
                        ))}
                      </div>
                    </>
                  )}

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
                        TOP 5
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
                      <div className="ml-auto">
                        {topRatingsList.map((element) => (
                          <>
                            <div className="d-flex">
                              <div
                                className="card-text mr-2"
                                style={{ fontSize: "16px" }}
                              >
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
                                {element.reviewCount}
                              </div>
                            </div>
                          </>
                        ))}
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
