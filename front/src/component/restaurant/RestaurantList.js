import { useRef } from "react";
import useLazyLoad from "./useLazyLoad";
import { TempCard } from "./TempCard";
import { LoadingPosts } from "./LoadingPosts";
import posts from "./data.json";

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
      {/* <div
        className="d-grid gap-3 p-5"
        style={{
          width: "100%",
          height: "1000px",
          overflow: "scroll",
          backgroundColor: "rgba(255, 0, 0, 0.1)",
        }}
      > */}
      {/* <div className="grid grid-cols-3 gap-4 content-start"> */}
      <Container>
        <Row>
          {data.map((image) => {
            return (
              <TempCard owner={image["owner"]} imageUrl={image["imageUrl"]} />
            );
          })}
        </Row>
      </Container>
      <div
        ref={triggerRef}
        className={`trigger ${loading ? "visible" : null})`}
      >
        <LoadingPosts />
      </div>
    </>
  );
};
