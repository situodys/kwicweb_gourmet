import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import star from "../../common/star";
import Badge from "react-bootstrap/Badge";

export const Review = (props) => {

    const {review} = props;

    return (
        <Col className="col-lg-4 mb-4">
            <Card
                style={{
                    border: "0px",
                    boxShadow: "0px 2px 2px 0px rgba(50,50,50,0.4)",
                    minWidth: '250px'
                }}
                className="mb-3"
            >
                <Card.Body style={{minHeight: "240px"}}>
                    <div>
                        <h4 className="m-0">
                            <strong>{review.title}</strong>
                        </h4>
                    </div>
                    <span>
                        <Stack direction="horizontal" gap={1} className="mt-2 mb-3">
                            {star(review.rating, "sm")}
                        </Stack>
                    </span>
                    <span>
                        {review.menus.map((menu, idx) =>
                            <Badge pill bg="secondary" className="mr-2">
                                {menu}
                            </Badge>)
                        }
                    </span>
                    <br/>
                    <br/>

                    <Card.Text
                        style={{
                            fontSize: "11pt",
                            lineHeight: "1.3rem",
                        }}
                    >
                        {review.content}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small class="text-muted">학번: {review.emailPrefix}</small>
                    <small class="text-muted" style={{float: "right"}}>
                        {review.createdAt}
                    </small>
                </Card.Footer>
            </Card>
        </Col>
    );
};
