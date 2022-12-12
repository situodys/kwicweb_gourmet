import React, { useEffect, useState } from "react";
import "../../component/auth/css/register.css";
import CustomInput from "../../component/auth/CustomInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Buffer } from "buffer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const Register = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [userAuthCodeInput, setUserAuthCodeInput] = useState("");

  const [isAuthenticatedEmail, setIsAuthenticatedEmail] = useState(false);
  const [isDuplicatedEmail, setIsDuplicatedEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidPasswordConfirm, setIsValidPasswordConfirm] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const [passwordConfirmMsg, setPasswordConfirmMsg] = useState("");
  const [duplicateIdMessage, setDuplicateIdMessage] = useState("");

  const checkLogin = () => {
    const tk = window.localStorage.getItem("atk");
    if (tk) {
      navigate("/main");
    }
    setIsLogin(true);
  };

  useEffect(() => {
    if (!isLogin) {
      checkLogin();
    }
    checkConfirm();
  }, [password, passwordConfirm]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setDuplicateIdMessage("");
    setIsAuthenticatedEmail(false);
    setIsDuplicatedEmail(false);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (password.length !== 0) {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }
    setIsValidPasswordConfirm(false);
  };
  const handlePasswordConfirm = (e) => {
    e.preventDefault();
    setPasswordConfirm(e.target.value);
  };

  const handleEmailSend = async (e) => {
    setIsEmailSent(true);
    try {
      if (await isAlreadySignup()) {
        return;
      }
      await sendEmail();
    } catch (err) {
      console.log(err);
    }
  };

  const isAlreadySignup = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/auth/email/health`,
      { email: `${email}` }
    );
    if (response.data && response.data === true) {
      setDuplicateIdMessage("등록된 이메일입니다.");
      setIsDuplicatedEmail(true);
      setIsAuthenticatedEmail(false);
      return true;
    }
    return false;
  };

  const sendEmail = async () => {
    window.alert("이메일을 확인해주세요!");
    setIsEmailSent(true);
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/auth/email`,
      { email: `${email}` }
    );
    setAuthCode(response.data);
  };

  const handleUserAuthCodeInput = (e) => {
    e.preventDefault();
    setUserAuthCodeInput(e.target.value);
    setIsAuthenticatedEmail(false);
  };

  const handleEmailAuthSubmit = () => {
    if (userAuthCodeInput === authCode) {
      setIsAuthenticatedEmail(true);
      return;
    }
  };

  const handleRegisterSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/auth/signup`,
        toData()
      );
      if (response.status === 200) {
        window.alert("정상적으로 가입되었습니다");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const checkConfirm = () => {
    if (!passwordConfirm) {
      setPasswordConfirmMsg("");
    } else if (passwordConfirm && passwordConfirm === password) {
      setPasswordConfirmMsg("비밀번호가 일치합니다.");
      setIsValidPasswordConfirm(true);
    } else {
      setPasswordConfirmMsg("비밀번호가 다릅니다. 다시 확인해주세요");
      setIsValidPasswordConfirm(false);
    }
  };

  const toData = () => {
    const data = {};
    data["email"] = email;
    data["password"] = Buffer.from(password).toString("base64");
    return data;
  };

  return (
    <>
      <section className="h-100 gradient-custom Login-body">
        <div className="container py-3 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your e-mail and password!
                    </p>

                    <CustomInput
                      type={"email"}
                      placeHolder={"Email"}
                      handleInput={handleEmail}
                    ></CustomInput>
                    <button
                      className="btn btn-outline-light btn-lg col-8 mb-4"
                      type="submit"
                      onClick={handleEmailSend}
                    >
                      E-mail Authentication
                    </button>

                    {isEmailSent && (
                      <div className="p-3 border border-light mb-4 rounded">
                        <div className="row">
                          <div className="col-9">
                            <CustomInput
                              type={"text"}
                              placeHolder={"auth code"}
                              handleInput={handleUserAuthCodeInput}
                            ></CustomInput>
                          </div>
                          {isAuthenticatedEmail === true ? (
                            <div className="col-3 mt-2">
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                size="2xl"
                                color="#7CFC00"
                              />
                            </div>
                          ) : (
                            <div className="col-3 mt-2">
                              <FontAwesomeIcon
                                icon={faCircleXmark}
                                size="2xl"
                                color="red"
                              />
                            </div>
                          )}
                        </div>

                        <button
                          className="btn btn-outline-light btn-lg col-12"
                          type="submit"
                          onClick={handleEmailAuthSubmit}
                        >
                          Check
                        </button>
                      </div>
                    )}
                    <CustomInput
                      type={"password"}
                      placeHolder={"Password"}
                      handleInput={handlePassword}
                    ></CustomInput>
                    <CustomInput
                      type={"password"}
                      placeHolder={"PasswordConfirm"}
                      handleInput={handlePasswordConfirm}
                    ></CustomInput>
                    <div
                      className={" mb-5"}
                      style={{
                        color: isValidPasswordConfirm ? "green" : "red",
                        height: "20px",
                      }}
                    >
                      {passwordConfirmMsg}
                    </div>

                    <button
                      disabled={
                        !(
                          isAuthenticatedEmail &&
                          !isDuplicatedEmail &&
                          isValidPasswordConfirm &&
                          isValidPassword
                        )
                      }
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={handleRegisterSubmit}
                    >
                      Register
                    </button>
                  </div>

                  <div>
                    <p className="mb-0">
                      Have already an account?{" "}
                      <a href="/login" className="text-white-50 fw-bold">
                        Login here
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

export default Register;
