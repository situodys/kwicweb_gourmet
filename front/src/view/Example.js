import {useLocation} from "react-router-dom";

export default function Example(props) {

    const location = useLocation();
    const number = location.state.variable;

    return (
        <>
            <h3>{number}번 예제입니다.</h3>
        </>
    )
};