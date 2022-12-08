import {Container, Tab, Tabs} from "react-bootstrap";
import Reviews from "../review/Reviews";
import Menu from "../menu/Menu";
import Proposal from "../proposal/Proposal";
import Notification from "../notification/Notification";

export default function RestaurantCategoryRouter(props) {
    const {restaurantId, tabKey, setTabKey} = props;
    return (
        <Container style={{backgroundColor: "#fff7ec"}}>
            <Tabs
                style={{
                    fontSize: "30px",
                    backgroundColor: "#fff7ec",
                    color: "",
                }}
                activeKey={tabKey}
                onSelect={(k) => setTabKey(k)}
            >
                <Tab as={"h1"} eventKey={"menu"} title={"메뉴"}>
                    {tabKey === "menu" && <Menu restaurantId={restaurantId}/>}
                </Tab>

                <Tab eventKey={"review"} title={"리뷰"}>
                    {tabKey === "review" && <Reviews restaurantId={restaurantId}/>}
                </Tab>

                <Tab eventKey={"proposal"} title={"요청사항"}>
                    {tabKey === "proposal" && <Proposal restaurantId={restaurantId}/>}
                </Tab>

                <Tab eventKey={"notification"} title={"변동사항"}>
                    {tabKey === "notification" && <Notification restaurantId={restaurantId}/>}
                </Tab>
            </Tabs>
        </Container>
    )
};