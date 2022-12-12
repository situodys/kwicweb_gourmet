import {useEffect, useState} from "react";
import RestaurantCarousel from "../component/restaurant/core/RestaurantCarousel";

import Reviews from "../component/restaurant/review/Reviews";

import "../component/auth/css/login.css";
import {Container, Tab, Tabs} from "react-bootstrap";
import Menu from "../component/restaurant/menu/Menu";
import Proposal from "../component/restaurant/proposal/Proposal";
import {useLocation} from "react-router-dom";
import CustomAxios from "../api/customAxios";
import RestaurantCategoryRouter from "../component/restaurant/core/RestaurantCategoryRouter";

export default function Restaurant() {
    const location = useLocation();
    const restaurantId = location.state.restaurantId;
    const [tabKey, setTabKey] = useState("menu");
    const [restaurant, setRestaurant] = useState();

    const init = async () => {
        const response = await CustomAxios.get(`/restaurants/${restaurantId}`);
        setRestaurant(response.data);
    }

    useEffect(() => {
        void init();
    }, []);

    return (
        <div class="w-100 Login-body">
            {restaurant && <RestaurantCarousel restaurant={restaurant}/>}
            <RestaurantCategoryRouter restaurantId={restaurantId} tabKey={tabKey} setTabKey={setTabKey}/>
        </div>
    );
};