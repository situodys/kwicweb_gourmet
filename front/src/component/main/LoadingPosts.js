import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ReactComponent as Heart } from "../../assets/images/heart-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export const LoadingCard = () => {
  return (
    <>
      <Col className="col-4 mb-3">
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
                  Western
                </Badge>
                <Badge pill bg="danger" className="mr-2">
                  Non-deliverable
                </Badge>
              </div>
              <hr className="my-2"></hr>
              <div className="row">
                <div className="col-12">
                  <Link to="/Main" className="navbar-brand ">
                    <div
                      style={{
                        borderRadius: "20px",
                        objectFit: "cover",
                        aspectRatio: "16/9",
                      }}
                    ></div>
                  </Link>
                </div>
                <div className="col-12">
                  <div class="d-flex flex-column h-100 pt-2">
                    <div style={{ fontSize: "16px", lineHeight: "20px" }}>
                      <strong>Very-Very Delicious Resturant</strong>
                    </div>
                    <span className="mr-2">
                      <FontAwesomeIcon
                        icon={faStar}
                        size="xs"
                        className="star-checked"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        size="xs"
                        className="star-checked"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        size="xs"
                        className="star-checked"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        size="xs"
                        className="star-checked"
                      />
                      <FontAwesomeIcon icon={faStar} size="xs" />
                    </span>
                    <div class="pt-1">
                      <h6
                        class="card-text"
                        style={{ fontSize: "10px", width: "80%" }}
                      >
                        (727) 772-5780 2606 Brinley Dr New Port Richey,
                        Florida(FL), 34655
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
                        1235
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export const LoadingPosts = () => {
  const loadPages = [...Array(6).keys()];
  return (
    <>
      {loadPages.map((num) => {
        return <LoadingCard />;
      })}
    </>
  );
};

export const Card = ({ owner, imageUrl }) => {
  return (
    <div class="w-full rounded overflow-hidden shadow-lg m-2">
      <img class="w-full h-64 object-center" src={imageUrl} />
      <div class="px-6 py-4">
        <div class="font-regular text-xl mb-2">{owner}</div>
      </div>
    </div>
  );
};
