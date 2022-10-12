import React from "react";
import { useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import Seprator from "../components/General/Seprator";
import "./SignUpPage.css";
import axios from "axios";
import Logo from "../components/General/Logo";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const country = useRef();
  const city = useRef();
  const navigate = useNavigate();
  const SignUpsubmitHandler = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      alert("passwords do not match");

      return;
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/user/register`,
        {
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
          country: country.current.value,
          city: city.current.value,
        }
      );
      console.log(response);
      if (response.status === 200) {
        alert("Account Created Successfully");
        navigate("/login");
      }
    } catch (err) {
      console.log(err.response.data);
      alert(err.response.data);
    }
  };
  return (
    <div className="SingUpContainer">
      <div className="SignUpPageLogo"></div>
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
                ref={firstNameRef}
                placeholder="First Name"
                required
              />
              <input
                className="SingUpInput"
                type="text"
                ref={lastNameRef}
                placeholder="Last Name"
                required
              />
            </div>
            <input
              className="SingUpInput"
              type="text"
              ref={emailRef}
              placeholder="Email"
              required
            />
            <input
              className="SingUpInput"
              type="password"
              ref={passwordRef}
              placeholder="Password"
              required
            />
            <input
              className="SingUpInput"
              type="password"
              ref={confirmPasswordRef}
              placeholder="Re-enter Password"
              required
            />
            <input
              className="SingUpInput"
              type="text"
              ref={country}
              placeholder="Country (optional)"
            />
            <input
              className="SingUpInput"
              type="text"
              ref={city}
              placeholder="City (optional)"
            />
            <button
              className="SingUpSubmitButton"
              type="submit"
              onClick={SignUpsubmitHandler}
            >
              Sign Up
            </button>
          </form>
          <div className="AlreadyHaveAccount">Already have an account?</div>
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
