/* eslint-disable no-unused-vars */
import "./header.scss";
import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBasket } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useBasketState } from "../Context provider/basketStateProvider";
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

const Header = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useBasketState();
  const header_NavbarReference = useRef();

  const logoutHandler = async () => {
    const docRef = doc(db, "users", state.user?.uid);
    try {
      await setDoc(docRef, {
        basket: state.basket,
      });
      setTimeout(() => navigate("/login"), 500);
    } catch (error) {
      console.log(error.message);
    }
    dispatch({ type: "EMPTY_BASKET" });
    signOut(auth).catch((error) => {
      console.log("Something went wrong ", error.message);
    });
  };

  const activateMobileNavbar = () => {
    header_NavbarReference.current.classList.toggle("header_nav_active");
  };

  return (
    <div className="header_container">
      <div className="header_logo">
        <Link to="/">
          <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </Link>
      </div>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav" ref={header_NavbarReference}>
        <Link to={!state.user && `/login`}>
          <div className="header_option">
            <span className="header_optionLineOne">
              {state.user ? `${state.user.email}` : `Hello Guest`}
            </span>
            <span onClick={logoutHandler} className="header_optionLineTwo">
              {state.user ? `Logout` : `Login`}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header_option">
            <span className="header_optionLineOne">Returns </span>
            <span className="header_optionLineTwo">Orders</span>
          </div>
        </Link>
        <Link to="">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo header_optionPrime">
              Prime{" "}
            </span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="header_optionLineTwo header_basketCount">
              {state?.basket?.length}
            </span>
          </div>
        </Link>
      </div>
      <div className="header_hamburger" onClick={activateMobileNavbar}>
        <div className="header_hamburgerLine"></div>
        <div className="header_hamburgerLine"></div>
        <div className="header_hamburgerLine"></div>
      </div>
    </div>
  );
};

export default Header;
