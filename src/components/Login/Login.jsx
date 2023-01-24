import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login_container">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login_form">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" name="email" />
          <h5>Password</h5>
          <input type="password" name="password" />
          <button className="login_singinbutton">Sign in</button>
        </form>
        <p>
          By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login_registerbutton">
          Create your amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
