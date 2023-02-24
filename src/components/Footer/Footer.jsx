import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer_container">
      <div className="footer_totop">
        <button onClick={scrollToTop}>Back to top</button>
      </div>
      <div className="footer_linksContainer">
        <div className="footer_linksList">
          <h4>Get to Know Us</h4>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
          </ul>
        </div>
        <div className="footer_linksList">
          <h4>Connect with Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="footer_linksList">
          <h4>Make Money with Us</h4>
          <ul>
            <li>Sell On Amazon</li>
            <li>Sell Under Amazon Acceleraor</li>
            <li>Protect and Build Your Brand</li>
            <li>Amazon Global Selling</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
        </div>
        <div className="footer_linksList">
          <h4>Let Us Help You</h4>
          <ul>
            <li>Covid-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Amazon Assistant Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <span className="footer_divider"></span>
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
    </div>
  );
};

export default Footer;
