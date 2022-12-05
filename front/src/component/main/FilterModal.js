import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

import "../../assets/styles.scss";

const FilterModal = ({ show, handleClose }) => {
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

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="special_modal"
      >
        <Modal.Header className="text-center border-0" closeButton>
          <Modal.Title className="w-100">Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-1">Cuisines</p>
          <hr className="mt-0" />

          <Form>
            {cuisines.map((cuisine) => (
              <>
                <Form.Check
                  key={`${cuisine}`}
                  type="checkbox"
                  label={cuisine}
                  className="filter-check"
                />
              </>
            ))}
          </Form>
        </Modal.Body>
        <hr className="m-0" />
        <Modal.Footer className="border-0 justify-content-center">
          <Button className="filter-btn" onClick={handleClose}>
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default FilterModal;
