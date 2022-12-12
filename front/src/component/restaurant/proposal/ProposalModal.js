import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import {useState} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import RstTimeSelect from "./RstTimeSelector";
import customAxios from "../../../api/customAxios";
import axios from "axios";
import MenuModifySelector from "./MenuModifySelector";
import jwt_decode from "jwt-decode";

const ProposalModal = (props) => {

    const {handleRegisterFlag, restaurantId, show, handleClose} = props;

    const categories = [
        {key: "오픈시간", value: "OPEN_TIME"},
        {key: "마감시간", value: "CLOSE_TIME"},
        {key: "메뉴명", value: "MENU_NAME"},
        {key: "메뉴 가격", value: "PRICE"},
    ];
    const [menus, setMenus] = useState();
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("OPEN_TIME");
    const [content, setContent] = useState("");
    const [menuId, setMenuId] = useState();

    const [hour, setHour] = useState("0");
    const [minute, setMinute] = useState("0");


    const handleCategory = async(e) => {
        e.preventDefault();
        setCategory(e.target.value);
        setHour("0");
        setMinute("0");
        setContent("");
        setMenuId(null);
        if(!menus){
            let response = await customAxios.get(`menus/all?restaurantId=${restaurantId}`);
            setMenus(response.data);
            setMenuId(response?.data[0]?.menuId);
        }
    }

    const handleTitle = (e) =>{
        e.preventDefault();
        setTitle(e.target.value);
    }

    const handleHour = (e) => {
        e.preventDefault();
        setHour(e.target.value);
    }

    const handleMinute = (e) => {
        e.preventDefault();
        setMinute(e.target.value);
    }

    const handleContent = (e) =>{
        e.preventDefault();
        setContent(e.target.value);
    }

    const handleMenuId = (e) =>{
        e.preventDefault();
        setMenuId(e.target.value);
    }

    const getContent = () => {
        if (category === "CLOSE_TIME" || category === "OPEN_TIME") {
            let tHour = hour;
            let tMinute = minute;
            if (hour.length === 1) {
                tHour = "0" + hour;
            }
            if(minute==="0"){
                tMinute = "0" + minute;
            }
            return tHour + ":" + tMinute;
        }
        return content;
    }

    const getMemberId = () =>{
        let payload = jwt_decode(window.localStorage.getItem("atk"));
        return payload.sub;
    }

    const toPostData = () =>{
        let data ={};
        data.category = category;
        data.content = getContent();
        data.memberId = getMemberId();
        data.menuId = menuId;
        data.restaurantId = restaurantId;
        data.title = title;

        return data;
    }


    const handleRegister = async(e) =>{
        e.preventDefault();
        let response = await customAxios.post(`/proposals`,toPostData());
        handleRegisterFlag();
        handleClose();
        return;
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                keyboard={true}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className=" border-0" closeButton></Modal.Header>
                <Modal.Title className="text-center w-100">
                    <strong>변경된 식당 정보를 알려주세요!</strong>
                </Modal.Title>

                <Modal.Body>
                    <Form>
                        <Stack gap={3}>
                            <hr className="mt-0"></hr>
                            <Form.Group>
                                <Form.Label>제목</Form.Label>
                                <Form.Control onChange={handleTitle} type="text" placeholder="요청사항 제목을 입력해주세요"/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>카테고리</Form.Label>
                                <Form.Select onChange={handleCategory}>
                                    {categories?.map((category, idx) =>
                                        <option key={idx} value={category.value}>{category.key}</option>
                                    )}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>변경내용</Form.Label>
                                {category === "PRICE" && <MenuModifySelector menus={menus} handleMenuId={handleMenuId} handleContent ={handleContent}/>}
                                {category === "MENU_NAME"&& <MenuModifySelector menus={menus} handleMenuId={handleMenuId} handleContent ={handleContent}/>}
                                {category === "OPEN_TIME" && <RstTimeSelect handleHour={handleHour} handleMinute={handleMinute}/>}
                                {category === "CLOSE_TIME"&& <RstTimeSelect handleHour={handleHour} handleMinute={handleMinute}/>}
                            </Form.Group>

                            <div className="d-flex justify-content-center">
                                <Button className="col-6" onClick={handleRegister}>
                                    등록하기
                                </Button>
                            </div>
                        </Stack>
                    </Form>
                </Modal.Body>

                <hr className="m-0"/>
                <Modal.Footer className="border-0"></Modal.Footer>
            </Modal>
        </>
    );
};
export default ProposalModal;
