import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MenuModifySelector(props) {

    const {handleContent, menus, handleMenuId} = props;

    return (
        <Form.Group>
            <Row>
                <Col className={"col-3"}>요청 메뉴</Col>
                <Col>
                    <Form.Select onChange={handleMenuId}>
                        {menus?.map((menu,idx)=>
                            <option key = {idx} value={menu.menuId}>{menu.menuName}</option>)}
                    </Form.Select>
                </Col>
            </Row>
            <Row>
                <Col className={"col-3"}>요청 내용</Col>
                <Col>
                    <Form.Control onChange={handleContent} type="text" placeholder="정보를 입력해주세요"/>
                </Col>
            </Row>
        </Form.Group>
    );
}