import { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const Review = ({ review }) => {
  return (
    <>
      <Col className="col-4 md-4">
        <Card
          style={{
            border: "0px",
            boxShadow: "0px 2px 2px 0px rgba(50,50,50,0.4)",
          }}
          className="mb-4"
        >
          <Card.Body>
            <div>
              <h4 className="m-0">
                <strong>Card Title</strong>
              </h4>
            </div>
            <span>
              <Stack direction="horizontal" gap={1} className="mt-2 mb-3">
                <FontAwesomeIcon
                  icon={faStar}
                  size="sm"
                  className="star-checked"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="sm"
                  className="star-checked"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="sm"
                  className="star-checked"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="sm"
                  className="star-checked"
                />
                <FontAwesomeIcon icon={faStar} size="sm" />
              </Stack>
            </span>

            <Card.Text
              style={{
                color: "#7F7F7F",
                fontSize: "11pt",
                lineHeight: "1.3rem",
              }}
            >
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <hr className="mb-1"></hr>
            <small class="text-muted">abcde@gmail.com</small>
            <small class="text-muted" style={{ float: "right" }}>
              9 mins
            </small>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
