import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useState } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const ProposalModal = ({ show, handleClose }) => {
  const [dropDownList, setDropDownList] = useState([
    "close-time",
    "open-time",
    "price",
    "menu",
  ]);
  const [menuList, setMenuList] = useState(["A", "B"]);

  const [selectedMenu, setSelectedMenu] = useState("");
  const [selectedDropDown, setSelectedDropDown] = useState("");

  const [selectedTime, setSelectedTime] = useState({ hour: "0", minute: "0" });

  const changeSelectedDropDown = (event, eventkey) => {
    setSelectedDropDown(eventkey.target.innerText);
  };

  const changeSelectedMenu = (event, eventkey) => {
    setSelectedMenu(eventkey.target.innerText);
  };

  const changeSelectedTime = (event, eventkey, flag) => {
    if (flag === "hour") {
      setSelectedTime({ ...selectedTime, hour: eventkey.target.innerText });
    } else if (flag === "minute") {
      setSelectedTime({ ...selectedTime, minute: eventkey.target.innerText });
    }
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
          <strong>Write a Proposal :)</strong>
        </Modal.Title>

        <Modal.Body>
          <div className="d-flex justify-content-center">
            <div className="mb-5"></div>
          </div>
          <Form>
            <Stack gap={3}>
              <div className="d-flex">
                <Stack direction="horizontal" gap={3}>
                  <Dropdown onSelect={changeSelectedDropDown}>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                      Problem
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {dropDownList.map((menu) => (
                        <Dropdown.Item key={menu}>{menu}</Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  {menuList && selectedDropDown === "menu" && (
                    <div>
                      <Dropdown onSelect={changeSelectedMenu}>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                          Menu
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          {menuList.map((menu) => (
                            <Dropdown.Item key={menu}>{menu}</Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  )}

                  {menuList &&
                    (selectedDropDown === "close-time" ||
                      selectedDropDown === "open-time") && (
                      <Stack direction="horizontal" gap={3}>
                        <Dropdown
                          onSelect={(event, eventkey) => {
                            changeSelectedTime(event, eventkey, "hour");
                          }}
                        >
                          <Dropdown.Toggle
                            variant="primary"
                            id="dropdown-basic"
                          >
                            Hour
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            {[...Array(24).keys()].map((hour) => (
                              <Dropdown.Item key={hour}>{hour}</Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown
                          onSelect={(event, eventkey) => {
                            changeSelectedTime(event, eventkey, "minute");
                          }}
                        >
                          <Dropdown.Toggle
                            variant="primary"
                            id="dropdown-basic"
                          >
                            Minutes
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            {[0, 15, 30, 45].map((minute) => (
                              <Dropdown.Item key={minute}>
                                {minute}
                              </Dropdown.Item>
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      </Stack>
                    )}
                </Stack>
              </div>
              <hr className="mt-0"></hr>
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
export default ProposalModal;
