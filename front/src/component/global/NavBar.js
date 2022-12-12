import {Link} from "react-router-dom";
import userImage from "../../assets/images/user.png";
import mainLogo from "../../assets/images/logo-no-background.png";
import {useEffect, useState} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

export default function NavBar() {

    const [isAuthPage, setIsAuthPage] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        setIsAuthPage(window.location.href.includes("login") || window.location.href.includes("register"));
        setIsAuthenticated(checkLogin);
    });

    const handleLogout = (e) => {
        e.preventDefault();
        if (window.confirm("로그아웃 하시겠습니까?") && checkLogin()) {
            window.localStorage.removeItem("atk");
            window.localStorage.removeItem("rtk");
            setIsAuthenticated(false);
        }
    };

    const checkLogin = () => {
        const tk = window.localStorage.getItem("atk");
        if (!tk) return false;
        if (tk) {
            return true;
        }
    }

    return (
        <Navbar className="navbar navbar-dark bg-dark px-4" style={{height: "9vh"}}>
            <Container>
                <Navbar.Brand href={"/main"}>
                    <div>
                        <img src={mainLogo} width={"160rem"}/>
                    </div>
                </Navbar.Brand>
            </Container>
            {!isAuthPage &&
                <Nav className="justify-content-end px-4">
                    {isAuthenticated ? <Nav.Link>
                            <Link onClick={handleLogout} style={{textDecoration: "none", color: "white"}}>
                                로그아웃
                            </Link>
                        </Nav.Link>
                        :
                        <Nav.Link href={"/login"}>
                            로그인
                        </Nav.Link>}

                    <Nav.Link>
                        <img src={userImage} width="30" height="30" alt=""></img>
                    </Nav.Link>
                    <Navbar.Text>

                    </Navbar.Text>
                </Nav>}
        </Navbar>
    )
};