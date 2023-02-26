/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const NotFoundPage = () => {
  let styles = {
    background: "lightGray",
    color: "gray",
    height: "50vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "25px",
  };

  return (
    <>
      <Header />
      <div style={{ ...styles }}>
        <p>Oops...Page not found.</p>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
