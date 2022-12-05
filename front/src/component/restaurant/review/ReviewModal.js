import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useState } from "react";
import Ratings from "react-ratings-declarative";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const ReviewModal = ({ show, handleClose }) => {
  const [menuList, setMenuList] = useState(["temp", "temp2"]);
  const [rating, setRating] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState("f");

  const changeRating = (newRating) => {
    setRating(newRating);
  };

  const changeStatus = (event, eventkey) => {
    setSelectedMenu(eventkey.target.innerText);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className=" border-0" closeButton></Modal.Header>
        <Modal.Title className="text-center w-100">
          <strong>Write a Review :)</strong>
        </Modal.Title>

        <Modal.Body>
          <div className="d-flex justify-content-center">
            <div className="mb-5">
              <Ratings
                rating={rating}
                widgetRatedColors="orange"
                changeRating={changeRating}
                widgetDimensions="40px"
              >
                <Ratings.Widget
                  widgetEmptyColor="grey"
                  widgetHoverColor="#ffd078"
                />
                <Ratings.Widget
                  widgetEmptyColor="grey"
                  widgetHoverColor="#ffd078"
                />
                <Ratings.Widget
                  widgetEmptyColor="grey"
                  widgetHoverColor="#ffd078"
                />
                <Ratings.Widget
                  widgetEmptyColor="grey"
                  widgetHoverColor="#ffd078"
                />
                <Ratings.Widget
                  widgetEmptyColor="grey"
                  widgetHoverColor="#ffd078"
                />
              </Ratings>
            </div>
          </div>
          <Form>
            <Stack gap={3}>
              <DropdownButton
                id="dropdown-menu-button"
                title="Menu"
                // onSelect={(e) => {
                //   console.log("F", e);
                //   setSelectedMenu(e);
                // }}
                onSelect={changeStatus}
              >
                {menuList.map((menu) => (
                  <Dropdown.Item key={menu}>{menu}</Dropdown.Item>
                ))}
              </DropdownButton>

              <Form.Control type="text" placeholder="Review title" />

              <Form.Control as="textarea" rows={12} />
              <div className="d-flex justify-content-center">
                <Button className="col-6" onClick={handleClose}>
                  Submit
                </Button>
              </div>
            </Stack>
          </Form>
        </Modal.Body>

        <hr className="m-0" />
        <Modal.Footer className="border-0"></Modal.Footer>
      </Modal>
    </>
  );
};
export default ReviewModal;
