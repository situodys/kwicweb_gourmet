import { Link } from "react-router-dom";

import RestaurantCarousel from "../component/restaurant/RestaurantCarousel";
import RestaurantCard from "../component/restaurant/RestaurantCard";
import "../component/auth/css/login.css";

const Restaurant = (props) => {
  return (
    <>
      <div class="container-fluid d-flex py-4 justify-content-center">
        <RestaurantCarousel />
      </div>
    </>
  );
};

export default Restaurant;
