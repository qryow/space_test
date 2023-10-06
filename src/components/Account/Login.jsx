import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./AccountStyles.module.css";
import {
    clearStatus,
    clearCurrentAccount,
} from "../../store/account/AccountSlice";
import { loginUser } from "../../store/account/AccountActions";
import MainNavbar from "../Main/MainNavbar";
import acc_back_img from "../../img/login_back_img.png";
import space_shtle from "../../img/login_back_img_shatle.png";
import google_icon from "../../img/google_icon.png";

const Login = () => {
    const [userObj, setUserObj] = useState({
        email: "",
        password: "",
    });

    const { status, loading } = useSelector((state) => state.account);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(clearStatus());
        dispatch(clearCurrentAccount());
    });

    return (
        <div className={style.login_main}>
            <img src={acc_back_img} alt="" className={style.acc_back_img} />
            <MainNavbar />
            {loading ? (
                <>
                    <h3>loading .....</h3>
                </>
            ) : (
                <>
                    {status ? (
                        <>
                            {status === "error" && (
                                <>
                                    <h3>error...</h3>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <div className={style.login_main_block}>
                                <div className={style.left_block_img}>
                                    <img src={space_shtle} alt="" />
                                </div>
                                <div className={style.inputs}>
                                    <div className={style.sign_up}>
                                        <p>don't have a account?</p>
                                        <a href="">Sing up</a>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}>
                                        <div
                                            className={style.main_inputs_block}>
                                            <h1>Login</h1>
                                            <div className="">
                                                <p>
                                                    User name or email address
                                                </p>
                                                <input
                                                    className={style.input}
                                                    type="email"
                                                    placeholder="Email"
                                                    onChange={(e) =>
                                                        setUserObj({
                                                            ...userObj,
                                                            email: e.target
                                                                .value,
                                                        })
                                                    }
                                                />
                                            </div>

                                            <div className="">
                                                <p>
                                                    User name or email address
                                                </p>

                                                <input
                                                    className={style.input}
                                                    type="password"
                                                    placeholder="password"
                                                    onChange={(e) =>
                                                        setUserObj({
                                                            ...userObj,
                                                            password:
                                                                e.target.value,
                                                        })
                                                    }
                                                />
                                                <a href="">
                                                    Forgot your password?
                                                </a>
                                            </div>
                                            <div className={style.button_block}>
                                                <button
                                                    onClick={() =>
                                                        dispatch(
                                                            loginUser({
                                                                userObj,
                                                                navigate,
                                                            })
                                                        )
                                                    }>
                                                    Login
                                                </button>
                                                <button
                                                    className={
                                                        style.google_bnt
                                                    }>
                                                    <img
                                                        src={google_icon}
                                                        alt=""
                                                    />
                                                    Continue with Google
                                                </button>
                                                <div
                                                    style={{ display: "flex" }}>
                                                    <p>don't have a account?</p>
                                                    <a href="">Sing up</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Login;
