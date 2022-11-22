import { Link } from "react-router-dom";
import ResturantCard from "./ResturantCard";
import "./login.css";

const Resturant = (props) => {
  return (
    <>
      <div class="container-fluid d-flex py-4 justify-content-center">
        <ResturantCard />
      </div>
    </>
  );
};

export default Resturant;
