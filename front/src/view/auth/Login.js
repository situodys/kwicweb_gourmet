import React, {useEffect, useState} from "react";
import "../../component/auth/css/login.css";
import CustomInput from "../../component/auth/CustomInput";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Login = (props) => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    const [IdMessage, setIdMessage] = useState("");
    const [pwMessage, setPwMessage] = useState("");


    const checkLogin = () => {
        const tk = window.sessionStorage.getItem("jwt");
        if (tk) {
            window.alert("로그인 되어 있는 상태입니다.")
            navigate("/home");
        }
        setIsLogin(true);
    }

    useEffect(() => {
        if (!isLogin) {
            checkLogin();
        }
    }, [])

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setIdMessage(" ");
        console.log(email);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPwMessage(" ");

    }
    const toData = () => {
        const data = {};
        data['email'] = email;
        data['password'] = Buffer.from(password).toString('base64');
        return data;
    }

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/login`, toData());
            if (response.status == 200) {
                window.alert("로그인 성공");
                window.localStorage.setItem("accessToken", response.data.accessToken);
                window.localStorage.setItem("refreshToken", response.data.refreshToken);
                navigate("/home");
            }
        } catch (err) {
            if (err) {
                if (err.response.data['message'].includes("아이디")) {
                    setIdMessage(err.response.data['message']);
                    setPwMessage("");
                }
                if (err.response.data['message'].includes("비밀번호")) {
                    setPwMessage(err.response.data['message']);
                }
            }
        }
    }

    return (
        <>
            <section className="h-100 gradient-custom Login-body">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div
                                className="card bg-dark text-white"
                                style={{borderRadius: "1rem"}}
                            >
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">
                                            Please enter your login and password!
                                        </p>

                                        <CustomInput type={"email"}
                                                     placeHolder={"Email"}
                                                     handleInput={handleEmail}></CustomInput>
                                        <div className="text-danger" style={{height: "20px"}}>
                                            {IdMessage}
                                        </div>

                                        <CustomInput type={"password"}
                                                     placeHolder={"Password"}
                                                     handleInput={handlePassword}></CustomInput>
                                        <div className="text-danger" style={{height: "20px"}}>
                                            {pwMessage}
                                        </div>

                                        <button
                                            className="btn btn-outline-light btn-lg px-5"
                                            type="submit"
                                            onClick={handleSubmit}
                                        >
                                            Login
                                        </button>
                                    </div>

                                    <div>
                                        <p className="mb-0">
                                            Don't have an account?{" "}
                                            <a href="/register" className="text-white-50 fw-bold">
                                                Sign Up
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
