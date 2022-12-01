import { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

export const MenuList = ({ menuList }) => {
  return (
    <>
      <Card
        style={{
          border: "0px",
          boxShadow: "0px 2px 2px 0px rgba(50,50,50,0.4)",
        }}
        className="mb-4"
      >
        <Card.Body style={{ minHeight: "360px", overflow: "auto" }}>
          <Container>
            <Row>
              <Col className="col-3">
                <div>
                  <h4 className="m-0">
                    <strong>Card Title</strong>
                  </h4>
                </div>
                <Card.Text
                  style={{
                    color: "#7F7F7F",
                    fontSize: "10pt",
                    lineHeight: "1.3rem",
                  }}
                >
                  10000
                </Card.Text>
              </Col>
              <Col className="col-6">
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
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};
