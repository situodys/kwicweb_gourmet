import RestaurantCard from "./RestaurantCard";

const RestaurantCarousel = (props) => {
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
                <RestaurantCard />
              </div>
            </div>
            <div className="carousel-item">
              <div class="d-flex justify-content-center">
                <RestaurantCard />
              </div>
            </div>
            <div className="carousel-item">
              <div class="d-flex justify-content-center">
                <RestaurantCard />
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default RestaurantCarousel;
