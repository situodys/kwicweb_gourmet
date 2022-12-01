import { RestaurantList } from "../component/main/RestaurantList";
import { RestaurantRecommendation } from "../component/main/RestaurantRecommendation";
import { Map } from "../component/main/Map";
import { useEffect, useState } from "react";
import customAxios from "../api/customAxios";
import Stack from "react-bootstrap/Stack";

export default function Main(props) {
  const [topLikes, setTopLikes] = useState([]);
  const [topRatings, setTopRatings] = useState([]);

  const handleTopList = async () => {
    try {
      const responseLikesTop5 = await customAxios.get("/restaurants/likes/top");
      const responseRatesTop5 = await customAxios.get(
        "/restaurants/reviews/rating/top"
      );

      if (
        responseLikesTop5.status === 200 &&
        responseRatesTop5.status === 200
      ) {
        setTopLikes(responseLikesTop5.data);
        setTopRatings(responseRatesTop5.data);
      }
    } catch (err) {
      if (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    handleTopList();
  }, []);

  return (
    <>
      <div
        className="d-flex Login-body justify-content-center"
        style={{ height: "93vh", overflow: "hidden" }}
      >
        <div
          className="row h-100"
          style={{ maxWidth: "90rem", padding: "4vh" }}
        >
          <div className="col-4 h-100">
            <div className="container-fluid h-100">
              <div className="row">
                <Map />
              </div>
              <div className="row">
                <RestaurantRecommendation
                  topLikes={topLikes}
                  topRatings={topRatings}
                />
              </div>
            </div>
          </div>

          <div className="col-8 h-100">
            <div className="input-group mb-3 cshadow-lg">
              <input type="search" class="form-control" placeholder=""></input>
              <button
                class="btn btn btn-primary"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div>
            <RestaurantList />
          </div>
        </div>
      </div>
    </>
  );
}
