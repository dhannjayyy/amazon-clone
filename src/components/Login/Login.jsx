import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import "./Login.scss";

const Login = () => {

  const navigate = useNavigate();

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

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,formInputs.email, formInputs.password).then((authObject)=>{
      if(authObject){
        navigate("/")
      }
    }).catch((error)=>{
      console.log("Some error has occured ",error.message)
    })
  };
  const signUp = (e) => {
    e.preventDefault();
      createUserWithEmailAndPassword(auth,formInputs.email, formInputs.password)
      .then((authObject) => {
        if(authObject){
          navigate('/');
        }        
      })
      .catch((error) => {
        console.log("Some error has occured", error.message);
      });
  };

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
          <button type="submit" onClick={signIn} className="login_singinbutton">
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={signUp} className="login_registerbutton">
          Create your amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
