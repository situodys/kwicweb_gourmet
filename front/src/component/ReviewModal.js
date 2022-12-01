import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useState } from "react";
import Ratings from "react-ratings-declarative";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ReviewModal = ({ show, handleClose }) => {
  const [cuisines, setCuisines] = useState([
    "Chinese",
    "Italian",
    "Japanese",
    "Korean",
    "Street",
    "Fusion",
  ]);

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");
  const [rating, setRating] = useState(0);

  const changeRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="special_modal"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="text-center border-0" closeButton>
          <Modal.Title className="w-100">Leave your review here :)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <hr className="mt-0" />
          <div className="d-flex justify-content-center">
            <Ratings
              rating={rating}
              widgetRatedColors="orange"
              changeRating={changeRating}
              widgetDimensions="40px"
            >
              <Ratings.Widget
                widgetEmptyColor="white"
                widgetHoverColor="orange"
              />
              <Ratings.Widget
                widgetEmptyColor="white"
                widgetHoverColor="orange"
              />
              <Ratings.Widget
                widgetEmptyColor="white"
                widgetHoverColor="orange"
              />
              <Ratings.Widget
                widgetEmptyColor="white"
                widgetHoverColor="orange"
              />
              <Ratings.Widget
                widgetEmptyColor="white"
                widgetHoverColor="orange"
              />
            </Ratings>
          </div>
          <Form>
            <Stack gap={3}>
              <Form.Control type="text" placeholder="Review title" />

              <Form.Control as="textarea" rows={12} />
              <Button className="filter-btn col-12" onClick={handleClose}>
                Submit
              </Button>
            </Stack>
          </Form>
        </Modal.Body>
        <hr className="m-0" />
        <Modal.Footer className="border-0 justify-content-center"></Modal.Footer>
      </Modal>
    </>
  );
};
export default ReviewModal;
