import { Link } from "react-router-dom";
import { useEffect } from "react";
import resturantImage from "../../assets/images/Restaurant.jpg";
import { ReactComponent as Heart } from "../../assets/images/heart-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

export const LoadingCard = () => {
  return (
    <>
      <div
        className="card"
        style={{
          width: "32rem",
          border: "0px",
          borderRadius: "20px",
          boxShadow: "0px 10px 10px 0px rgba(50,50,50,0.4)",
        }}
      >
        <div class="card-body mb-2 py-4">
          <div
            style={{
              paddingRight: "3rem",
              paddingLeft: "3rem",
            }}
          >
            <div className="d-flex">
              <Badge pill bg="info" className="mr-2">
                Western
              </Badge>{" "}
              <Badge pill bg="danger" className="mr-2">
                Non-deliverable
              </Badge>{" "}
            </div>
            <hr className="my-2"></hr>
            <div className="row">
              <div className="col-3">
                <Link to="/Main" className="navbar-brand ">
                  <div
                    style={{
                      borderRadius: "20px",
                      width: "80px",
                      height: "120px",
                      backgroundColor: "grey",
                    }}
                    alt="resturant"
                  ></div>
                </Link>
              </div>
              <div className="col-6">
                <div class="d-flex flex-column h-100">
                  <div>
                    <h6 class="card-title mb-0">
                      <strong>Very-Very Delicious Resturant</strong>
                    </h6>
                    <span className="mr-2">
                      <FontAwesomeIcon
                        icon={faStar}
                        size="sm"
                        className="star-checked"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        size="sm"
                        className="star-checked"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        size="sm"
                        className="star-checked"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        size="sm"
                        className="star-checked"
                      />
                      <FontAwesomeIcon icon={faStar} size="sm" />
                    </span>
                  </div>
                  <div class="mt-auto pt-4">
                    <h6
                      class="card-text"
                      style={{ fontSize: "12px", width: "85%" }}
                    >
                      (727) 772-5780 2606 Brinley Dr New Port Richey,
                      Florida(FL), 34655
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div class="d-flex align-items-end flex-column h-100">
                  <div class="p-2">
                    <Link to="/main">
                      <Button
                        className="btn btn-sm px-4 btn-open mb-2"
                        style={{
                          borderRadius: "27px",
                          float: "right",
                          cursor: "default",
                        }}
                      >
                        OPEN
                      </Button>{" "}
                      <Button
                        className="btn btn-sm px-4 btn-danger mb-2"
                        style={{
                          borderRadius: "27px",
                          float: "right",
                          cursor: "default",
                        }}
                      >
                        CLOSE
                      </Button>{" "}
                      <Button
                        className="btn btn-heart btn-sm px-4"
                        style={{ borderRadius: "27px", cursor: "default" }}
                      >
                        <Heart /> 1235
                      </Button>{" "}
                    </Link>
                  </div>

                  <div class="mt-auto p-2">
                    <Link to="/main"></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const LoadingPosts = () => {
  const loadPages = [1, 2, 3];
  return (
    <div className="grid grid-cols-3 gap-4 content-start">
      {loadPages.map((num) => {
        return <LoadingCard />;
      })}
    </div>
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
