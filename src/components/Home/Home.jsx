import React from "react";
import Product from "../Product/Product";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="banner_image"
          src="https://m.media-amazon.com/images/I/61Ly9zlsGxL._SX1500_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="prod_1"
            title="The Lean Startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
            />
          <Product
            id="prod_2"
            title="Smart TV"
            price={29.99}
            image="https://m.media-amazon.com/images/I/61IZcaEIt4L._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
            />
        </div>
        <div className="home_row">
          <Product
            id="prod_3"
            title="Smart Watch for Men Women, 2022"
            price={35.99}
            image="https://m.media-amazon.com/images/I/619l+9g92kL._AC_SX522_.jpg"
            rating={4}
            />
          <Product
            id="prod_4"
            title="AUVON Weekly Pill Organizer"
            price={7.99}
            image="https://m.media-amazon.com/images/I/51ANT5naoWL._AC_SX425_.jpg"
            rating={4}
            />
          <Product
            id="prod_5"
            title="AnotherChill Women's Casual Lounge Slip Long Dress"
            price={27.99}
            image="https://m.media-amazon.com/images/I/51MA6yrhY4L._AC_UL1500_.jpg"
            rating={4}
            />
        </div>
        <div className="home_row">
          <Product
            id="prod_6"
            title="The Lean Startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
