import { useRef } from "react";
import useLazyLoad from "./useLazyLoad";
import { TempCard } from "./TempCard";
import { LoadingPosts } from "./LoadingPosts";
import posts from "./data.json";

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
      <div
        className="d-grid gap-3 p-5"
        style={{
          width: "100%",
          height: "1000px",
          overflow: "scroll",
          backgroundColor: "rgba(255, 0, 0, 0.1)",
        }}
      >
        {data.map((image) => {
          return (
            <TempCard owner={image["owner"]} imageUrl={image["imageUrl"]} />
          );
        })}

        <div
          ref={triggerRef}
          className={`trigger ${loading ? "visible" : null})`}
        >
          <LoadingPosts />
        </div>
      </div>
    </>
  );
};
