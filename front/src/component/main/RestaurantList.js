import { useRef } from "react";
import useLazyLoad from "./useLazyLoad";
import { RestaurantSmallCard } from "./RestaurantSmallCard";
import { LoadingPosts } from "./LoadingPosts";
import posts from "../restaurant/data.json";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NUM_PER_PAGE = 6;
const TOTAL_PAGES = 3;

export const RestaurantList = () => {
  const images = posts["data"];
  const triggerRef = useRef(null);
  const onGrabData = (currentPage) => {
    // This would be where you'll call your API
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = images.slice(
          ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
          NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
        );
        console.log(data);
        resolve(data);
      }, 3000);
    });
  };
  const { data, loading } = useLazyLoad({ triggerRef, onGrabData });

  return (
    <>
      <Container
        className="p-3"
        style={{
          width: "100%",
          height: "93%",
          overflow: "auto",
          backgroundColor: "rgba(255, 0, 0, 0.1)",
          borderRadius: "25px",
        }}
      >
        <Row>
          {data.map((image) => {
            return (
              <RestaurantSmallCard
                owner={image["owner"]}
                imageUrl={image["imageUrl"]}
              />
            );
          })}
        </Row>
        <Row
          ref={triggerRef}
          className={`trigger ${loading ? "visible" : null})`}
        >
          <LoadingPosts />
        </Row>
      </Container>
    </>
  );
};
