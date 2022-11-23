import { Link } from "react-router-dom";
import RestaurantCard from "../component/restaurant/RestaurantCard";
import "../component/auth/css/login.css";

const Restaurant = (props) => {
  return (
    <>
      <div class="container-fluid d-flex py-4 justify-content-center">
        <RestaurantCard />
      </div>
    </>
  );
};

export default Restaurant;
