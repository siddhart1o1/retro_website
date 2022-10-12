import React from "react";
import { useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import Seprator from "../components/General/Seprator";
import "./LoginScreen.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
export default function LoginScreen() {
  const email = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const LoginHandler = async (e) => {
    e.preventDefault();
    console.log("Login");
    const emailValue = email.current.value;
    const passwordValue = passwordRef.current.value;
    if (emailValue === "" || passwordValue === "") {
      alert("Please fill all the fields");
    } else {
      try {
        console.log(process.env.REACT_APP_BACKEND_URL);
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/api/user/login`,
          {
            email: emailValue,
            password: passwordValue,
          }
        );
        dispatch({
          type: "login",
          payload: {
            userInfo: response.data,
            accessToken: response.data.accessToken,
          },
        });
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        window.location.href = "/";
      } catch (err) {
        console.log(err);
        alert(err);
      }
    }
  };

  return (
    <div className="LoginContainer">
      <div className="LoginScreenLogo"></div>
      <div className="LoginLeftHalf">
        <div className="LoginGreetings">
          <div className="LoginWelcome">Welcome back</div>
          <div className="LoginRequestDetials">Please Enter you details</div>
        </div>
        <div className="LoginInputContainer">
          <div className="LoginGoogleButtonContainer">
            <button className="GoogleLoginButton">
              <FcGoogle></FcGoogle>
              <span>Sign in with Google</span>
            </button>
          </div>
          <Seprator>or</Seprator>
          <form className="LoginFormContainer">
            <input
              className="LoginInput"
              type="text"
              ref={email}
              placeholder="Email"
            />
            <input
              className="LoginInput"
              type="password"
              ref={passwordRef}
              placeholder="Password"
            />
            <div className="LoginFromRememberAndPassword">
              <label className="LoginRemeberMe">
                <input type="checkbox" />
                Remeber Me
              </label>
              <div className="LoginForgotPassword">Forgot Password?</div>
            </div>
            <button
              onClick={LoginHandler}
              className="LoginSubmitButton"
              type="submit"
            >
              Log in
            </button>
          </form>
          <Link
            to="/signup"
            style={{
              textDecoration: "none",
              color: "black",
            }}
            className="LoginScreenSignUpButton"
            type="submit"
          >
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
      <div className="LoginRightHalf">
        <img
          src="/photos/Project_160-06.jpg"
          className="LoginScreenBackground"
          alt="background"
        />
      </div>
    </div>
  );
}
