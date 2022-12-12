import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import ReactGA from "react-ga";

const RouteChangeTracker = () =>{
    const location = useLocation();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (process.env.REACT_APP_GA_ID) {
            ReactGA.initialize(process.env.REACT_APP_GA_ID);
        }
        setInitialized(true);
    },[]);

    useEffect(() => {
        if (initialized) {
            ReactGA.pageview(location.pathname + location.search);
        }
    }, [initialized, location]);
}

export default RouteChangeTracker;