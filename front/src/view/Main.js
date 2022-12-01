import { RestaurantList } from "../component/restaurant/RestaurantList";
import { Map } from "../component/main/Map";
import { useEffect } from "react";

export default function Main(props) {
  return (
    <>
      <div className="container-fluid Login-body">
        <div className="row p-5">
          <div className="col-6">
            <div class="input-group mb-3 shadow-lg">
              <input type="search" class="form-control" placeholder=""></input>
              <button
                class="btn btn btn-primary"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div>

            <Map />
          </div>

          <div className="col-6">
            <RestaurantList />
          </div>
        </div>
      </div>
    </>
  );
}
