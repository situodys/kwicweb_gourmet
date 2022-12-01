import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

export const ProposalList = ({ proposalList }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await proposalList;
      setList(response);
    })();
  }, [proposalList]);

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
            {proposalList.length !== 0 && (
              <>
                {list.map((element) => (
                  <Row>
                    {}
                    <Col className="col-3">
                      <div>
                        <h4 className="m-0">
                          <strong>{element.menuName}</strong>
                        </h4>
                      </div>
                      <Card.Text
                        style={{
                          color: "#7F7F7F",
                          fontSize: "10pt",
                          lineHeight: "1.3rem",
                        }}
                      >
                        {element.price}
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
                        {element.description}
                      </Card.Text>
                    </Col>
                  </Row>
                ))}
              </>
            )}
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};
