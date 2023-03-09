/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./Login.scss";
import { collection, onSnapshot } from "firebase/firestore";
import { useBasketState } from "../Context provider/basketStateProvider";
import { db } from "../../firebase";

const Login = () => {
  const errorSpan = useRef();
  const [state, dispatch] = useBasketState();
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const authObject = await signInWithEmailAndPassword(
        auth,
        formInputs.email,
        formInputs.password
      );

      if (authObject) {
        const userProductsRef = collection(
          db,
          "users",
          authObject.user.uid,
          "userProducts"
        );
        onSnapshot(userProductsRef, (querySnapshot) => {
          const remoteBasket = querySnapshot.docs[0].data();
          const remoteWishlist = querySnapshot.docs[1].data();
          remoteBasket.basket.forEach((basketItem) => {
            dispatch({ type: "ADD_TO_BASKET", item: basketItem });
          });
          remoteWishlist.wishlist.forEach((wishlistItem) => {
            dispatch({ type: "ADD_TO_WISHLIST", item: wishlistItem });
          });
        });
      }
    } catch (error) {
      let customErrorHtml;
      switch (error.message) {
        case "Firebase: Error (auth/user-not-found).":
          customErrorHtml = "No user found with that email.";
          break;
        case "Firebase: Error (auth/wrong-password).":
          customErrorHtml = "Wrong Password, Please try again.";
          break;
        default:
          customErrorHtml = "Something went wrong, Please try again after some time."
          break;
      }
      console.log("Some error has occured ", error.message);
      errorSpan.current.innerHTML = customErrorHtml;
    }
  };

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const authObject = await createUserWithEmailAndPassword(
        auth,
        formInputs.email,
        formInputs.password
      );

    } catch (error) {
      let customErrorHtml;
      switch (error.message) {
        case "Firebase: Error (auth/invalid-email).":
          customErrorHtml = "Invalid Email Address.";
          break;
        case "Firebase: Password should be at least 6 characters (auth/weak-password).":
          customErrorHtml = "Password should be at least 6 characters long.";
          break;
        default:
          customErrorHtml = "Something went wrong, Please try again after some time."
          break;
      }
      console.log("Some error has occured ", error.message);
      errorSpan.current.innerHTML = customErrorHtml;
    }
  };

  return (
    <>
      {!state.user && (
        <div className="login_container">
          <Link to="/">
            <img
              className="login_logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
              alt=""
            />
          </Link>
          <div className="login_form">
            {state.throughCheckout === true && (
              <div className="login_loginFirstMessage">
                You need to login for checking out...
              </div>
            )}
            <h1>Sign-in</h1>
            <form>
              <h5>E-mail</h5>
              <input
                type="text"
                name="email"
                value={formInputs.email}
                onChange={handleInputChange}
              />
              <h5>Password</h5>
              <input
                type="password"
                name="password"
                value={formInputs.password}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                onClick={signIn}
                className="login_singinbutton"
              >
                Sign in
              </button>
            </form>
            <p>
              By signing-in you agree to AMAZON FAKE CLONE Conditions of Use &
              Sale. Please see our Privacy Notice, our Cookies Notice and our
              Interest-Based Ads Notice.
            </p>
            <button onClick={signUp} className="login_registerbutton">
              Create your amazon account
            </button>
            <span ref={errorSpan} className="login__error "></span>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
