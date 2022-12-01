import { Link } from "react-router-dom";
import { ReactComponent as Heart } from "../../assets/images/heart-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

import "./styles.scss";

export const TempCard = ({ owner, imageUrl }) => {
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
                  <img
                    src={imageUrl}
                    style={{ borderRadius: "20px" }}
                    width="100%"
                    alt="resturant"
                  ></img>
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
                      style={{ fontSize: "10px", width: "50%" }}
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
                      <div
                        className="px-4 py-1 mb-2"
                        style={{
                          float: "right",
                          cursor: "default",
                          color: "white",
                          borderRadius: "27px",
                          backgroundColor: "#28a745",
                          alignItems: "center",
                        }}
                      >
                        OPEN
                      </div>
                      <div
                        className="px-4 py-1 mb-2"
                        style={{
                          float: "right",
                          cursor: "default",
                          color: "white",
                          borderRadius: "27px",
                          backgroundColor: "#F65390",
                          display: "inline-flex",
                          alignItems: "center",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faHeart}
                          size="sm"
                          className="mr-2"
                        />{" "}
                        1235
                      </div>
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
