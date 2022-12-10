import {RestaurantSmallCard} from "./RestaurantSmallCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import thumbnails from "../../assets/data.json"
import "./asset/CardListScroll.css"

export const RestaurantList = (props) => {

    const {data, refProp} = props;
    const imgUrls = thumbnails['data'];


    return (
        <Container
            className="p-3 customScrollBar"
            style={{
                width: "100%",
                height: "93%",
                overflow: "auto",
                borderRadius: "25px",
            }}
        >
            <Row>
                {data.map((restaurant, idx) =>
                    <RestaurantSmallCard key={idx} restaurant={restaurant} imgURL={imgUrls[idx%5].imageUrl}/>
                )}
            </Row>
            <div ref={refProp} ></div>
        </Container>
    );
};
