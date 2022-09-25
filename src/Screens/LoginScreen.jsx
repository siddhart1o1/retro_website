import React from "react";
import { useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import Seprator from "../components/General/Seprator";
import "./LoginScreen.css";
import Logo from "../components/General/Logo";
export default function LoginScreen() {
  const email = useRef();
  const passwordRef = useRef();

  return (
    <div className="LoginContainer">
      <div className="LoginScreenLogo">
      </div>
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
            <button className="LoginSubmitButton" type="submit">
              Log in
            </button>
          </form>
          <div className="LoginScreenSignUpButton" type="submit">
            Don't have an account? Sign up
          </div>
        </div>
      </div>
      <div className="LoginRightHalf">
        {/* <div>
          <Logo size={"5rem"}></Logo>
        </div>
         */}

        <img src="/photos/Project_160-06.jpg" className="LoginScreenBackground" alt="background" />
        {/* <p className="LoginScreenLeftHalfDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci unde
          modi doloribus asperiores impedit ut voluptates atque rem minus
          dolorem cum, reprehenderit omnis quia, distinctio quae ratione
          sapiente labore consequuntur? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Adipisci unde modi doloribus asperiores impedit ut
          voluptates atque rem minus dolorem cum, reprehenderit omnis quia,
          distinctio quae ratione sapiente labore consequuntur?
        </p> */}
      </div>
    </div>
  );
}
