import "./header.scss";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useBasketState } from "../Context provider/basketStateProvider";

const Header = () => {
  const [state, dispatch] = useBasketState();
  const loginHandler = ()=>{
    signOut(auth).catch((error)=>{
      console.log("Something went wrong ",error.message)
    })
  }

  return (
    <div className="header-container">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!state.user && `/login`}>
          <div className="header_option">
            <span className="header_optionLineOne">Hello Guest</span>
            <span onClick={loginHandler} className="header_optionLineTwo">{state.user? `Logout`:`Login`}</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Returns </span>
          <span className="header_optionLineTwo">Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo header_optionPrime">
            Prime{" "}
          </span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="header_optionLineTwo header_basketCount">
              {state?.basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
