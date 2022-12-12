/*global kakao*/
import React, {useEffect, useState} from "react";

export const Map = (props) => {

    let container;
    let options;
    const [map,setMap] = useState();
    const [infoWindows, setInfoWindows] = useState([]);

    const {addresses} = props;

    useEffect(() => {
        createMap();
    }, []);

    useEffect(() => {
        void markAddresses();
    }, [addresses,map]);

    const createMap = () => {
        container = document.getElementById("map");
        options = {
            center: new kakao.maps.LatLng(37.62007363509869, 127.05875945815039),
            level: 4,
        };
        setMap(new kakao.maps.Map(container, options));
    }

    const clearPrevRestaurantInMap = () =>{
            infoWindows?.map((info) => clearInfo(info));
    }

    const clearInfo = (info) =>{
        info.marker.setVisible(false);
        info.infoWindow.close();
    }

    const markAddresses = async() => {
        if(addresses.length===0) return;
        const geocoder = new kakao.maps.services.Geocoder();
        clearPrevRestaurantInMap();
        let currentInfoWindows = [];
        for (let i = 0; i < addresses?.length; i++) {
            await geocoder?.addressSearch(toFullAddress(addresses[i]), (result, status) => {
                if (status === kakao.maps.services.Status.OK) {
                    let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                    let marker = new kakao.maps.Marker({
                        map: map,
                        position: coords
                    });
                    let infoWindow = new kakao.maps.InfoWindow({
                        content: addresses[i]?.name
                    });
                    currentInfoWindows.push({infoWindow,marker});
                    infoWindow.open(map, marker);
                }
            })
        }
        console.log(currentInfoWindows)
        setInfoWindows(currentInfoWindows);
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