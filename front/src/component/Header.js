import {Link} from "react-router-dom";

const Header = (props) =>{
    return(
        <>
            <Link to ="/">
                <h1>main으로 돌아가기</h1>
            </Link>
        </>
    )
}

export default Header;