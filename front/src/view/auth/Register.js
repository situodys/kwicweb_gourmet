import React from "react";
import "../../component/auth/css/register.css";
import CustomInput from "../../component/auth/CustomInput";

const Register = (props) => {

    return (
        <>
            <section className="h-100 gradient-custom Login-body">
                <div className="container py-3 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div
                                className="card bg-dark text-white"
                                style={{borderRadius: "1rem"}}
                            >
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">
                                        <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                                        <p className="text-white-50 mb-5">
                                            Please enter your e-mail and password!
                                        </p>

                                        <CustomInput type={"email"}
                                                     placeHolder={"Email"}></CustomInput>
                                        <button
                                            className="btn btn-outline-light btn-lg col-12 mb-4"
                                            type="submit"
                                        >
                                            E-mail Authentication
                                        </button>
                                        <CustomInput type={"password"}
                                                     placeHolder={"Password"}></CustomInput>
                                        <CustomInput type={"password"}
                                                     placeHolder={"Password"}></CustomInput>
                                        <button
                                            className="btn btn-outline-light btn-lg px-5"
                                            type="submit"
                                        >
                                            Register
                                        </button>
                                    </div>

                                    <div>
                                        <p className="mb-0">
                                            Have already an account?{" "}
                                            <a href="src/view/auth/Register#!" className="text-white-50 fw-bold">
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
