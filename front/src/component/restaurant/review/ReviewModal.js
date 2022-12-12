import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import {useState} from "react";
import Ratings from "react-ratings-declarative";
import Container from "react-bootstrap/esm/Container";
import Badge from "react-bootstrap/Badge";
import customAxios from "../../../api/customAxios";
import CustomAxios from "../../../api/customAxios";
import jwt_decode from "jwt-decode";

const ReviewModal = (props) => {

    const {handleRegisterFlag, show, handleClose, menus,restaurantId} = props;

    const [rating, setRating] = useState(0);
    const [title, setTitle] = useState("");
    const [selectedMenus, setSelectedMenus] = useState([]);
    const [reviewBody, setReviewBody] = useState("");

    const toPostData = () =>{
        let data={};
        data.title = title;
        data.rating = rating;
        data.simpleMenus = selectedMenus;
        data.content = reviewBody;
        data.memberId= getMemberIdFromAtk();
        data.restaurantId =restaurantId;

        return data;
    }
    const getMemberIdFromAtk = ()=>{
        let atk = jwt_decode(window.localStorage.getItem("atk"));
        return atk.sub;
    }

    const changeRating = (newRating) => {
        setRating(newRating);
    };

    const handleSelectMenu = (e, idx) => {
        e.preventDefault();
        if (selectedMenus.includes(menus[idx])) {
            setSelectedMenus(selectedMenus.filter(menu => menu !== menus[idx]));
            return;
        }
        setSelectedMenus([...selectedMenus, menus[idx]]);
    }

    const handleMenuColor = (menu) => {
        if (selectedMenus.includes(menu)) {
            return "warning";
        }
        return "light";
    }

    const handleTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    }

    const handleReviewBody = (e) => {
        e.preventDefault();
        setReviewBody(e.target.value);
    }

    const handleRegisterButton = async(e) =>{
        e.preventDefault();
        try{
            let response = await customAxios.post(`/reviews`, toPostData());
            handleRegisterFlag();
            handleClose();
        }catch (err){
            console.log(err);
        }

    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className=" border-0" closeButton></Modal.Header>
            <Modal.Title className="text-center w-100">
                <strong>리뷰를 작성해주세요!</strong>
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
                            {[1, 2, 3, 4, 5].map((key) =>
                                <Ratings.Widget
                                    widgetEmptyColor="grey"
                                    widgetHoverColor="#ffd078"
                                />
                            )}
                        </Ratings>
                    </div>
                </div>
                <Form>
                    <Stack gap={3}>
                        <Form.Control onChange={handleTitle} type="text" placeholder=" 리뷰 제목"/>
                        <Container className={"align-items-center"}>
                            <div>리뷰할 메뉴를 선택해주세요!</div>
                            {menus.map((menu, idx) =>
                                <Badge key={idx} as={"button"} style={{margin: '0.125rem'}} onClick={(e) => handleSelectMenu(e, idx)} pill
                                       bg={handleMenuColor(menu)} text={"dark"} className="mr-2">
                                    {menu?.menuName}
                                </Badge>)
                            }
                        </Container>
                        <Form.Control onChange={handleReviewBody} as="textarea" rows={12}/>

                        <div className="d-flex justify-content-center">
                            <Button className="col-6" onClick={handleRegisterButton}>
                                등록하기
                            </Button>
                        </div>
                    </Stack>
                </Form>
            </Modal.Body>

            <hr className="m-0"/>
            <Modal.Footer className="border-0"></Modal.Footer>
        </Modal>
    );
};
export default ReviewModal;
