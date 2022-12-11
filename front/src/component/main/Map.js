/*global kakao*/
import React, {useEffect} from "react";

export const Map = (props) => {

    let container;
    let options;
    let map;

    const {addresses} = props;

    useEffect(() => {
        createMap();
    }, []);

    useEffect(() => {
        markAddresses();
    }, [addresses]);

    const createMap = () => {
        container = document.getElementById("map");
        options = {
            center: new kakao.maps.LatLng(37.62007363509869, 127.05875945815039),
            level: 4,
        };
        map = new kakao.maps.Map(container, options);
    }

    const markAddresses = () => {
        const geocoder = new kakao.maps.services.Geocoder();
        for (let i = 0; i < addresses?.length; i++) {
            geocoder?.addressSearch(toFullAddress(addresses[i]), (result, status) => {
                if (status === kakao.maps.services.Status.OK) {
                    let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    let marker = new kakao.maps.Marker({
                        map: map,
                        position: coords
                    });
                    let infoWindow = new kakao.maps.InfoWindow({
                        content: addresses[i]?.name
                    });
                    infoWindow.open(map, marker);
                    map.setCenter(coords);
                }
            })
        }
    }

    const toFullAddress = (simpleRestaurantResponse) => {
        let fullAddr = simpleRestaurantResponse.address.city + " " +
            simpleRestaurantResponse.address.street + " " +
            simpleRestaurantResponse.address.zipcode;

        return fullAddr;
    }

    return (
        <div className="w-100">
            <div
                id="map"
                className="shadow-lg"
                style={{maxheight: "100%", aspectRatio: "1/1", borderRadius: "12px"}}
            ></div>
        </div>
    );
};