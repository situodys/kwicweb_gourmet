import { Link } from "react-router-dom";
import { useState } from "react";
import resturantImage from "../../assets/images/Restaurant.jpg";
import { ReactComponent as Heart } from "../../assets/images/heart-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import FilterModal from "./FilterModal";
import ReviewModal from "../ReviewModal";
import ProposalModal from "../ProposalModal";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

import "./styles.scss";

const RestaurantCard = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
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
                Western
              </Badge>{" "}
              <Badge pill bg="danger" className="mr-2">
                Non-deliverable
              </Badge>{" "}
              <Badge
                pill
                onClick={handleShow}
                className="filter-badge ml-auto"
                style={{
                  cursor: "pointer",
                }}
              >
                Add filter +
              </Badge>{" "}
              <ProposalModal show={show} handleClose={handleClose} />
            </div>
            <hr className="my-2"></hr>
            <div className="row">
              <div className="col-3">
                <Link to="/Main" className="navbar-brand ">
                  <img
                    src={resturantImage}
                    style={{ borderRadius: "20px" }}
                    width="100%"
                    alt="resturant"
                  ></img>
                </Link>
              </div>
              <div className="col-6">
                <div class="d-flex flex-column h-100">
                  <div>
                    <h4 class="card-title mb-0">
                      <strong>Very-Very Delicious Resturant</strong>
                    </h4>
                    <span className="mr-2">
                      <FontAwesomeIcon
                        icon={faStar}
                        size="lg"
                        className="star-checked"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        size="lg"
                        className="star-checked"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        size="lg"
                        className="star-checked"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        size="lg"
                        className="star-checked"
                      />
                      <FontAwesomeIcon icon={faStar} size="lg" />
                    </span>
                    <span style={{ fontSize: "15pt" }}>4.0</span>
                    <span style={{ fontSize: "8pt" }} className="ml-1">
                      (4 participants)
                    </span>

                    <p class="card-text mt-3 mb-0 fs-4">OPEN</p>
                    <p class="card-text">OPENS AT 10:30 / CLOSES AT 17:30</p>
                  </div>
                  <div class="mt-auto">
                    <p class="card-text" style={{ width: "160px" }}>
                      (727) 772-5780 2606 Brinley Dr New Port Richey,
                      Florida(FL), 34655
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-3">
                <div class="d-flex align-items-end flex-column h-100">
                  <div class="p-2">
                    <Link to="/main">
                      <Button
                        className="btn btn-heart btn-lg px-5"
                        style={{ borderRadius: "27px" }}
                      >
                        <Heart /> 1235
                      </Button>{" "}
                    </Link>
                  </div>

                  <div class="mt-auto p-2">
                    <Link to="/main">
                      <button
                        type="button"
                        class="btn btn-primary btn-lg px-5"
                        style={{ borderRadius: "27px" }}
                      >
                        DELIVERY :)
                      </button>
                    </Link>
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

export default RestaurantCard;
