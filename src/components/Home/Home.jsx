import React from "react";
import Product from "../Product/Product";
import "./home.scss";

const Home = () => {
  const productsArray = [
    [
      "prod_",
      "The Lean Startup",
      29.99,
      "https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY327_FMwebp_QL65_.jpg",
      4,
    ],
    [
      "prod_",
      "Smart TV",
      29.99,
      "https://m.media-amazon.com/images/I/61IZcaEIt4L._AC_UY327_FMwebp_QL65_.jpg",
      4,
    ],
    [
      "prod_",
      "Smart Watch for Men Women, 2022",
      35.99,
      "https://m.media-amazon.com/images/I/619l+9g92kL._AC_SX522_.jpg",
      4,
    ],
    [
      "prod_",
      "AUVON Weekly Pill Organizer",
      7.99,
      "https://m.media-amazon.com/images/I/51ANT5naoWL._AC_SX425_.jpg",
      4,
    ],
    [
      "prod_",
      "AnotherChill Women's Casual Lounge Slip Long Dress",
      27.99,
      "https://m.media-amazon.com/images/I/51MA6yrhY4L._AC_UL1500_.jpg",
      4,
    ],
    [
      "prod_",
      "The Lean Startup",
      29.99,
      "https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY327_FMwebp_QL65_.jpg",
      4,
    ],
  ];
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="banner_image"
          src="https://m.media-amazon.com/images/I/61Ly9zlsGxL._SX1500_.jpg"
          alt=""
        />
        <div className="home_row">
          {productsArray.map((product, index) => {
            if (index <= 1) {
              return (
                <Product
                  key={index}
                  id={`${product[0]}_${Math.floor(
                    Math.random() * Number.MAX_SAFE_INTEGER
                  )}_${index}_${Math.floor(Math.random() * 100)}`}
                  title={product[1]}
                  price={product[2]}
                  image={product[3]}
                  rating={product[4]}
                />
              );
            }
          })}
        </div>
        <div className="home_row">
          {productsArray.map((product, index) => {
            if (index > 1 && index <=4 ) {
              return (
                <Product
                  key={index}
                  id={`${product[0]}_${Math.floor(
                    Math.random() * Number.MAX_SAFE_INTEGER
                  )}_${index}_${Math.floor(Math.random() * 100)}`}
                  title={product[1]}
                  price={product[2]}
                  image={product[3]}
                  rating={product[4]}
                />
              );
            }
          })}
        </div>
        <div className="home_row">
          {productsArray.map((product, index) => {
            if (index > 4) {
              return (
                <Product
                  key={index}
                  id={`${product[0]}_${Math.floor(
                    Math.random() * Number.MAX_SAFE_INTEGER
                  )}_${index}_${Math.floor(Math.random() * 100)}`}
                  title={product[1]}
                  price={product[2]}
                  image={product[3]}
                  rating={product[4]}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
