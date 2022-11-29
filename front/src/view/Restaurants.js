import { Link } from "react-router-dom";

import { useEffect } from "react";
import RestaurantCarousel from "../component/restaurant/RestaurantCarousel";
import Reviews from "../component/Reviews";
import "../component/auth/css/login.css";

const Restaurant = (props) => {
  useEffect(() => {
    // 👇 add class to body element
    document.body.classList.add("Login-body");

    return () => {
      // 👇️ optionally remove styles when component unmounts
      document.body.style.backgroundColor = null;
      document.body.classList.remove("Login-body");
    };
  }, []);
  return (
    <>
      <div class="w-100">
        <RestaurantCarousel />
        <Reviews />
      </div>
    </>
  );
};

export default Restaurant;
