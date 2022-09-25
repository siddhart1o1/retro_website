import React from "react";
import { useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import Seprator from "../components/General/Seprator";
import "./SignUpPage.css";

import Logo from "../components/General/Logo";
export default function SignUpPage() {
  const email = useRef();
  const passwordRef = useRef();

  return (
    <div className="SingUpContainer">
      <div className="SignUpPageLogo">
      </div>
      <div className="SingUpLeftHalf">
        <div className="SingUpGreetings">
          <div className="SingUpWelcome">Welcome!</div>
          <div className="SingUpRequestDetials">Please Enter you details</div>
        </div>
        <div className="SingUpInputContainer">
          <div className="SingUpGoogleButtonContainer">
            <button className="GoogleSingUpButton">
              <FcGoogle></FcGoogle>
              <span>Sign up with Google</span>
            </button>
          </div>
          <Seprator>or</Seprator>
          <form className="SingUpFormContainer">
            <div className="SignUpName">
              <input
                className="SingUpInput"
                type="text"
                ref={email}
                placeholder="First Name"
              />
              <input
                className="SingUpInput"
                type="text"
                ref={email}
                placeholder="Last Name"
              />
            </div>
            <input
              className="SingUpInput"
              type="text"
              ref={email}
              placeholder="Email"
            />
            <input
              className="SingUpInput"
              type="password"
              ref={passwordRef}
              placeholder="Password"
            />
            <input
              className="SingUpInput"
              type="password"
              ref={passwordRef}
              placeholder="Re-enter Password"
            />
            <button className="SingUpSubmitButton" type="submit">
              Sign Up
            </button>
          </form>
          <div className="AlreadyHaveAccount">Already have an account?</div>
        </div>
      </div>
      <div className="SingUpRightHalf">
        <div>
          <Logo size={"5rem"}></Logo>
        </div>
        <p className="SignUpPageLeftHalfDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci unde
          modi doloribus asperiores impedit ut voluptates atque rem minus
          dolorem cum, reprehenderit omnis quia, distinctio quae ratione
          sapiente labore consequuntur? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Adipisci unde modi doloribus asperiores impedit ut
          voluptates atque rem minus dolorem cum, reprehenderit omnis quia,
          distinctio quae ratione sapiente labore consequuntur?
        </p>
      </div>
    </div>
  );
}
