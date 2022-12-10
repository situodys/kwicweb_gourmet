import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function RstTimeSelect(props) {
    const {handleHour, handleMinute} = props;

    return (
        <Form.Group>
            <Row>
                <Col >
                    <Form.Select onChange={handleHour}>
                        {Array.from({length:24},(val,idx)=>idx).map((idx)=>
                            <option key = {idx} value={idx}>{idx}</option>)}
                    </Form.Select>
                </Col>
                <Col>시</Col>
                <Col>
                    <Form.Select onChange={handleMinute}>
                        {Array.from({length:4},(val,idx)=>idx*15).map((idx)=>
                            <option key = {idx} value={idx}>{idx}</option>)}
                    </Form.Select>
                </Col>
                <Col>분</Col>
            </Row>
        </Form.Group>
    );
}