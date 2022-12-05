import { Review } from "./Review";
import { useState } from "react";

const Reviews = (props) => {
  const [reviews, setReviews] = useState([
    { 1: 1 },
    { 1: 1 },
    { 1: 1 },
    { 1: 1 },
  ]);

  return (
    <>
      <div class="album py-5" style={{ backgroundColor: "#fff7ec" }}>
        <div class="container">
          <hr></hr>
          <div class="row">
            {reviews.map((review) => (
              <Review review={review}></Review>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Reviews;
