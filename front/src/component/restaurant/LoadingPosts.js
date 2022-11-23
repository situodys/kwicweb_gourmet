import { Link } from "react-router-dom";
import { useEffect } from "react";
import resturantImage from "../../assets/images/Restaurant.jpg";
import { ReactComponent as Heart } from "../../assets/images/heart-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const LoadingCard = () => {
  return (
    <div
      className="card shadow"
      style={{ width: "75rem", borderRadius: "14px" }}
    >
      <div class="card-body p-3 mb-3 p-5">
        <div
          style={{
            paddingRight: "7rem",
            paddingLeft: "7rem",
            marginBottom: "1rem",
          }}
        >
          <div>
            <span
              class="badge badge-dark mr-2"
              style={{ borderRadius: "12px", fontSize: "12px" }}
            >
              Florida
            </span>
            <span
              class="badge badge-info mr-2"
              style={{ borderRadius: "12px", fontSize: "12px" }}
            >
              Western Cusine
            </span>

            <span
              class="badge badge-danger mr-2"
              style={{ borderRadius: "12px", fontSize: "12px" }}
            >
              Non-deliverable
            </span>

            <Link to="/main">
              <span
                class="badge badge-success mr-2"
                style={{
                  borderRadius: "12px",
                  fontSize: "12px",
                  float: "right",
                }}
              >
                Add filter +
              </span>
            </Link>
          </div>
          <hr className="my-2"></hr>
          <div className="row">
            <div className="col-3">
              <Link to="/Main" className="navbar-brand ">
                <div
                  id="rectangle"
                  style={{
                    width: "200px",
                    height: "260px",
                    background: "gray",
                  }}
                ></div>
              </Link>
            </div>
            <div className="col-6">
              <div class="d-flex flex-column h-100">
                <div class="p-2">
                  <span class="placeholder col-6"></span>
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
                <div class="mt-auto p-2">
                  <p class="card-text" style={{ width: "160px" }}>
                    (727) 772-5780 2606 Brinley Dr New Port Richey, Florida(FL),
                    34655
                  </p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div class="d-flex align-items-end flex-column h-100">
                <div class="p-2">
                  <Link to="/main">
                    <button
                      type="button"
                      className="btn btn-heart btn-lg px-5"
                      style={{ borderRadius: "27px" }}
                    >
                      <Heart /> 1235
                    </button>
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
