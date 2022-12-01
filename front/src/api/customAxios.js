import axios from "axios";

const customAxios = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}`
});

customAxios.interceptors.request.use(
    function (config) {
        const atk = localStorage.getItem("atk");
        config.headers["Authorization"] = "Bearer " + atk;
        return config;
    }
);

export default customAxios;