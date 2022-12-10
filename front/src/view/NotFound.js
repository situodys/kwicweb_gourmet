import customAxios from "../api/customAxios";
import {useNavigate} from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate();

    const handleNavigate = async (e) => {
        e.preventDefault();
        navigate("/main");
    };

    return (
        <div>
            <h1>잘못된 경로의 접근입니다.</h1>
            <button onClick={handleNavigate}>메인으로 돌아가기</button>
        </div>
    );
};

export default NotFound;