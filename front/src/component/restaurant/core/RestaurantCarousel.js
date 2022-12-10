import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const RestaurantCarousel = (props) => {

  const {restaurant} = props;

  return (
    <>
      <div className="w-100">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
          data-interval="false"
        >
          <div className="carousel-inner p-4">
            <div className="carousel-item active">
              <div class="d-flex justify-content-center">
                <RestaurantCard restaurant={restaurant}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCarousel;
