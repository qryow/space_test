import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./styles/AccountStyles.module.css";
import { clearStatus } from "../../store/account/AccountSlice";
import {
    getUsers,
    loginUser,
    registerUser,
} from "../../store/account/AccountActions";
import MainNavbar from "../Main/MainNavbar";

import open from "../../img/hide-pass.svg";
import hide from "../../img/pass_open.svg";
import google from "../../img/google.svg";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [userObj, setUserObj] = useState({
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        password_confirm: "",
    });

    const [emailError, setEmailError] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfirmError, setPasswordConfirmError] = useState("");

    const handleCreateAccount = () => {
        if (!userObj.email) {
            setEmailError("Email is required");
        } else {
            setEmailError("");
        }

        if (!userObj.first_name) {
            setFirstNameError("First name is required");
        } else {
            setFirstNameError("");
        }

        if (!userObj.last_name) {
            setLastNameError("Last name is required");
        } else {
            setLastNameError("");
        }

        if (!userObj.password) {
            setPasswordError("Password is required");
        } else {
            setPasswordError("");
        }

        if (!userObj.password_confirm) {
            setPasswordConfirmError("Confirmation is required");
        } else {
            setPasswordConfirmError("");
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const { status, loading } = useSelector((state) => state.account);
    const { users } = useSelector((state) => state.account);

    const sameEmailError = () => {
        const userWithEmail = users.find(
            (user) => user.email === userObj.email
        );
        if (userWithEmail) {
            return "User with this email already exists";
        }
        return "";
    };
    const emailErrorMessage = sameEmailError();

    const notSamePassword = () => {
        if (userObj.password !== userObj.password_confirm) {
            return "Passwords do not match";
        }
        return "";
    };
    const passwordMessage = notSamePassword();

    const notFullPassword = () => {
        if (
            userObj.password.length < 8 ||
            userObj.password_confirm.length < 8
        ) {
            return "Need to be more than 8";
        }
        return "";
    };
    const fullPass = notFullPassword();

    const addEmail = () => {
        localStorage.setItem("account", JSON.stringify(userObj.email));
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(clearStatus());
        dispatch(getUsers());
    }, []);

    return (
        <>
            {loading ? (
                <>
                    <div className={style.wrapper}>
                        <div className={style.container}>
                            <MainNavbar />
                            <div className={style.block__wrapper}>
                                <div className={style.block}>
                                    <h2 className={style.block__title}>
                                        Create an account
                                    </h2>
                                    <p className={style.block__subtitle}>
                                        Already have an ccount?{" "}
                                        <a
                                            onClick={() => navigate("/login")}
                                            className={style.link}
                                        >
                                            Log in
                                        </a>
                                    </p>

                                    <div className={style.email__field}>
                                        <p className={style.input__title}>
                                            Email address
                                        </p>
                                        <input
                                            type="text"
                                            placeholder="@"
                                            className={style.email__input}
                                            onChange={(e) =>
                                                setUserObj({
                                                    ...userObj,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                    </div>

                                    <div className={style.pass__fields}>
                                        <div className={style.pass__field}>
                                            <p className={style.input__title}>
                                                Password
                                            </p>
                                            <div
                                                className={style.input__wrapper}
                                            >
                                                <input
                                                    type={
                                                        showPassword
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    className={
                                                        style.pass__input
                                                    }
                                                    onChange={(e) =>
                                                        setUserObj({
                                                            ...userObj,
                                                            password:
                                                                e.target.value,
                                                        })
                                                    }
                                                />
                                                <img
                                                    onClick={
                                                        togglePasswordVisibility
                                                    }
                                                    className={style.hide}
                                                    src={
                                                        showPassword
                                                            ? hide
                                                            : hide
                                                    }
                                                    alt=""
                                                />
                                            </div>
                                        </div>

                                        <div className={style.pass__field}>
                                            <p className={style.input__title}>
                                                Confirm your password
                                            </p>
                                            <div
                                                className={style.input__wrapper}
                                            >
                                                <input
                                                    type={
                                                        showPassword
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    className={
                                                        style.pass__input
                                                    }
                                                    onChange={(e) =>
                                                        setUserObj({
                                                            ...userObj,
                                                            password_confirm:
                                                                e.target.value,
                                                        })
                                                    }
                                                />
                                                <img
                                                    onClick={
                                                        togglePasswordVisibility
                                                    }
                                                    className={style.hide}
                                                    src={
                                                        showPassword
                                                            ? hide
                                                            : "open"
                                                    }
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <p className={style.pass__sub}>
                                        Use 8 or more characters with a mix of
                                        letters, numbers & symbols
                                    </p>
                                    <div className={style.privacy}>
                                        <input
                                            className={style.checkbox}
                                            type="checkbox"
                                        />
                                        <p className={style.privacy__text}>
                                            Agree to our{" "}
                                            <a href="#">Terms of use</a> and{" "}
                                            <a href="#">Privacy Policy</a>{" "}
                                        </p>
                                    </div>

                                    <button
                                        className={style.reg__btn}
                                        onClick={() => {
                                            dispatch(
                                                registerUser({
                                                    userObj,
                                                    navigate,
                                                })
                                            );
                                            addEmail();
                                        }}
                                    >
                                        Create Account
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.loading}>
                        <div className={style.spinner}></div>
                    </div>
                </>
            ) : (
                <>
                    {status ? (
                        <>
                            {status === "error" && (
                                <>
                                    <div className={style.wrapper}>
                                        <div className={style.container}>
                                            <MainNavbar />
                                            <div
                                                className={style.block__wrapper}
                                            >
                                                <div className={style.block}>
                                                    <h2
                                                        className={
                                                            style.block__title
                                                        }
                                                    >
                                                        Create an account
                                                    </h2>
                                                    <p
                                                        className={
                                                            style.block__subtitle
                                                        }
                                                    >
                                                        Already have an ccount?{" "}
                                                        <a
                                                            onClick={() =>
                                                                navigate(
                                                                    "/login"
                                                                )
                                                            }
                                                            className={
                                                                style.link
                                                            }
                                                        >
                                                            Log in
                                                        </a>
                                                    </p>

                                                    <div
                                                        className={
                                                            style.email__field
                                                        }
                                                    >
                                                        <p
                                                            className={
                                                                style.input__title
                                                            }
                                                        >
                                                            {emailErrorMessage ? (
                                                                <span
                                                                    className={
                                                                        style.error
                                                                    }
                                                                >
                                                                    {
                                                                        emailErrorMessage
                                                                    }
                                                                </span>
                                                            ) : (
                                                                "Email address "
                                                            )}
                                                        </p>
                                                        <input
                                                            type="email"
                                                            placeholder={
                                                                emailError
                                                                    ? emailError
                                                                    : "@"
                                                            }
                                                            className={
                                                                emailError ||
                                                                emailErrorMessage
                                                                    ? `${style.email__input} ${style.error__input}`
                                                                    : `${style.email__input}`
                                                            }
                                                            onChange={(e) =>
                                                                setUserObj({
                                                                    ...userObj,
                                                                    email: e
                                                                        .target
                                                                        .value,
                                                                })
                                                            }
                                                            value={
                                                                userObj.email
                                                            }
                                                        />
                                                    </div>

                                                    <div
                                                        className={
                                                            style.pass__fields
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                style.pass__field
                                                            }
                                                        >
                                                            <p
                                                                className={
                                                                    style.input__title
                                                                }
                                                            >
                                                                {fullPass ? (
                                                                    <span
                                                                        className={
                                                                            style.error
                                                                        }
                                                                    >
                                                                        {" "}
                                                                        {
                                                                            fullPass
                                                                        }{" "}
                                                                    </span>
                                                                ) : (
                                                                    "Password"
                                                                )}
                                                            </p>
                                                            <div
                                                                className={
                                                                    style.input__wrapper
                                                                }
                                                            >
                                                                <input
                                                                    type={
                                                                        showPassword
                                                                            ? "text"
                                                                            : "password"
                                                                    }
                                                                    placeholder={
                                                                        passwordError
                                                                            ? passwordError
                                                                            : ""
                                                                    }
                                                                    className={
                                                                        passwordError ||
                                                                        passwordMessage ||
                                                                        fullPass
                                                                            ? `${style.error__input} ${style.pass__input}`
                                                                            : `${style.pass__input}`
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setUserObj(
                                                                            {
                                                                                ...userObj,
                                                                                password:
                                                                                    e
                                                                                        .target
                                                                                        .value,
                                                                            }
                                                                        )
                                                                    }
                                                                    value={
                                                                        userObj.password
                                                                    }
                                                                />
                                                                <img
                                                                    onClick={
                                                                        togglePasswordVisibility
                                                                    }
                                                                    className={
                                                                        style.hide
                                                                    }
                                                                    src={
                                                                        showPassword
                                                                            ? hide
                                                                            : open
                                                                    }
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>

                                                        <div
                                                            className={
                                                                style.pass__field
                                                            }
                                                        >
                                                            <p
                                                                className={
                                                                    style.input__title
                                                                }
                                                            >
                                                                {passwordMessage ? (
                                                                    <span
                                                                        className={
                                                                            style.error
                                                                        }
                                                                    >
                                                                        {" "}
                                                                        {
                                                                            passwordMessage
                                                                        }{" "}
                                                                    </span>
                                                                ) : (
                                                                    "Confirm your password"
                                                                )}
                                                            </p>
                                                            <div
                                                                className={
                                                                    style.input__wrapper
                                                                }
                                                            >
                                                                <input
                                                                    type={
                                                                        showPassword
                                                                            ? "text"
                                                                            : "password"
                                                                    }
                                                                    placeholder={
                                                                        passwordConfirmError
                                                                            ? passwordConfirmError
                                                                            : ""
                                                                    }
                                                                    className={
                                                                        passwordConfirmError ||
                                                                        passwordMessage ||
                                                                        fullPass
                                                                            ? `${style.error__input} ${style.pass__input}`
                                                                            : `${style.pass__input}`
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setUserObj(
                                                                            {
                                                                                ...userObj,
                                                                                password_confirm:
                                                                                    e
                                                                                        .target
                                                                                        .value,
                                                                            }
                                                                        )
                                                                    }
                                                                    value={
                                                                        userObj.password_confirm
                                                                    }
                                                                />
                                                                <img
                                                                    onClick={
                                                                        togglePasswordVisibility
                                                                    }
                                                                    className={
                                                                        style.hide
                                                                    }
                                                                    src={
                                                                        showPassword
                                                                            ? hide
                                                                            : open
                                                                    }
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p
                                                        className={
                                                            style.pass__sub
                                                        }
                                                    >
                                                        Use 8 or more characters
                                                        with a mix of letters,
                                                        numbers & symbols
                                                    </p>
                                                    <div
                                                        className={
                                                            style.privacy
                                                        }
                                                    >
                                                        <input
                                                            className={
                                                                style.checkbox
                                                            }
                                                            type="checkbox"
                                                        />
                                                        <p
                                                            className={
                                                                style.privacy__text
                                                            }
                                                        >
                                                            Agree to our{" "}
                                                            <a href="#">
                                                                Terms of use
                                                            </a>{" "}
                                                            and{" "}
                                                            <a href="#">
                                                                Privacy Policy
                                                            </a>{" "}
                                                        </p>
                                                    </div>

                                                    <button
                                                        className={
                                                            style.reg__btn
                                                        }
                                                        onClick={() => {
                                                            dispatch(
                                                                registerUser({
                                                                    userObj,
                                                                    navigate,
                                                                })
                                                            );
                                                            handleCreateAccount();
                                                            sameEmailError();
                                                            notSamePassword();
                                                            addEmail();
                                                            notFullPassword();
                                                        }}
                                                    >
                                                        Create Account
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <div className={style.wrapper}>
                                <div className={style.container}>
                                    <MainNavbar />
                                    <div className={style.block__wrapper}>
                                        <div className={style.block}>
                                            <h2 className={style.block__title}>
                                                Create an account
                                            </h2>
                                            <p
                                                className={
                                                    style.block__subtitle
                                                }
                                            >
                                                Already have an ccount?{" "}
                                                <a
                                                    onClick={() =>
                                                        navigate("/login")
                                                    }
                                                    className={style.link}
                                                >
                                                    Log in
                                                </a>
                                            </p>

                                            <div className={style.email__field}>
                                                <p
                                                    className={
                                                        style.input__title
                                                    }
                                                >
                                                    Email address
                                                </p>
                                                <input
                                                    type="email"
                                                    placeholder="@"
                                                    className={
                                                        style.email__input
                                                    }
                                                    onChange={(e) =>
                                                        setUserObj({
                                                            ...userObj,
                                                            email: e.target
                                                                .value,
                                                        })
                                                    }
                                                    value={userObj.email}
                                                />
                                            </div>

                                            <div className={style.pass__fields}>
                                                <div
                                                    className={
                                                        style.pass__field
                                                    }
                                                >
                                                    <p
                                                        className={
                                                            style.input__title
                                                        }
                                                    >
                                                        Password
                                                    </p>
                                                    <div
                                                        className={
                                                            style.input__wrapper
                                                        }
                                                    >
                                                        <input
                                                            minLength={8}
                                                            type={
                                                                showPassword
                                                                    ? "text"
                                                                    : "password"
                                                            }
                                                            className={
                                                                style.pass__input
                                                            }
                                                            onChange={(e) =>
                                                                setUserObj({
                                                                    ...userObj,
                                                                    password:
                                                                        e.target
                                                                            .value,
                                                                })
                                                            }
                                                            value={
                                                                userObj.password
                                                            }
                                                        />
                                                        <img
                                                            onClick={
                                                                togglePasswordVisibility
                                                            }
                                                            className={
                                                                style.hide
                                                            }
                                                            src={
                                                                showPassword
                                                                    ? hide
                                                                    : open
                                                            }
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>

                                                <div
                                                    className={
                                                        style.pass__field
                                                    }
                                                >
                                                    <p
                                                        className={
                                                            style.input__title
                                                        }
                                                    >
                                                        Confirm your password
                                                    </p>
                                                    <div
                                                        className={
                                                            style.input__wrapper
                                                        }
                                                    >
                                                        <input
                                                            minLength={8}
                                                            type={
                                                                showPassword
                                                                    ? "text"
                                                                    : "password"
                                                            }
                                                            className={
                                                                style.pass__input
                                                            }
                                                            onChange={(e) =>
                                                                setUserObj({
                                                                    ...userObj,
                                                                    password_confirm:
                                                                        e.target
                                                                            .value,
                                                                })
                                                            }
                                                            value={
                                                                userObj.password_confirm
                                                            }
                                                        />
                                                        <img
                                                            onClick={
                                                                togglePasswordVisibility
                                                            }
                                                            className={
                                                                style.hide
                                                            }
                                                            src={
                                                                showPassword
                                                                    ? hide
                                                                    : open
                                                            }
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className={style.pass__sub}>
                                                Use 8 or more characters with a
                                                mix of letters, numbers &
                                                symbols
                                            </p>
                                            <div className={style.privacy}>
                                                <input
                                                    className={style.checkbox}
                                                    type="checkbox"
                                                />
                                                <p
                                                    className={
                                                        style.privacy__text
                                                    }
                                                >
                                                    Agree to our{" "}
                                                    <a href="#">Terms of use</a>{" "}
                                                    and{" "}
                                                    <a href="#">
                                                        Privacy Policy
                                                    </a>{" "}
                                                </p>
                                            </div>

                                            <button
                                                className={style.reg__btn}
                                                onClick={() => {
                                                    dispatch(
                                                        registerUser({
                                                            userObj,
                                                            navigate,
                                                        })
                                                    );
                                                    handleCreateAccount();
                                                    sameEmailError();
                                                    notSamePassword();
                                                    addEmail();
                                                    notFullPassword();
                                                }}
                                            >
                                                Create Account
                                            </button>
                                            <button className={style.google}>
                                                <img
                                                    className={
                                                        style.google__img
                                                    }
                                                    src={google}
                                                    alt=""
                                                />{" "}
                                                Continue with Google{" "}
                                            </button>
                                            <p
                                                className={
                                                    style.block__subtitle
                                                }
                                            >
                                                Already have an ccount?{" "}
                                                <a
                                                    onClick={() =>
                                                        navigate("/login")
                                                    }
                                                    className={style.link}
                                                >
                                                    Log in
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default Register;
