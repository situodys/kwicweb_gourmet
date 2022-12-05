import {useState} from "react";
import RestaurantCarousel from "../component/restaurant/core/RestaurantCarousel";

import Reviews from "../component/restaurant/review/Reviews";

import "../component/auth/css/login.css";
import {Container, Tab, Tabs} from "react-bootstrap";
import Menu from "../component/restaurant/menu/Menu";
import Proposal from "../component/restaurant/proposal/Proposal";
import {useLocation} from "react-router-dom";
import CustomAxios from "../api/customAxios";

function Notifications() {
    return null;
}

const Restaurant = (props) => {
    const location = useLocation();
    const restaurantId = location.state.restaurantId;
    const [tabKey, setTabKey] = useState("review");
    const [restaurant, setRestaurant] = useState();

    const init = async () =>{
        const response = await CustomAxios.get(`/restaurant/${restaurantId}`);
        setRestaurant(response.data);
    }

    return (
        <>
            <div class="w-100 Login-body">
                <RestaurantCarousel tabKey={tabKey}/>

                <Container
                    fluid
                    className="d-flex justify-content-center"
                    style={{backgroundColor: "#fff7ec"}}
                >
                    <div>
                        <Tabs
                            style={{
                                fontSize: "30px",
                                backgroundColor: "#fff7ec",
                                minWidth: "80rem",
                                color: "",
                            }}
                            activeKey={tabKey}
                            onSelect={(k) => setTabKey(k)}
                        >
                            <Tab eventKey={"review"} title={"리뷰"}>
                                {tabKey === "review" && <Reviews/>}
                            </Tab>

                            <Tab as={"h1"} eventKey={"menu"} title={"메뉴"}>
                                {tabKey === "menu" && <Menu/>}
                            </Tab>

                            <Tab eventKey={"proposal"} title={"요청사항"}>
                                {tabKey === "proposal" && <Proposal/>}
                            </Tab>

                            <Tab eventKey={"notification"} title={"변동사항"}>
                                {tabKey === "notification" && <Notifications/>}
                            </Tab>
                        </Tabs>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Restaurant;
