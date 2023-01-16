import React from "react";
import "./product.scss";

const Product = (props) => {
  return (
    <div className="product">
      <div className="product_info">
        <p>{props.title}</p>
        <p className="product_price">
          <small>$ </small>
          <strong>{props.price}</strong>
        </p>
        <div className="product_rating">
          {
            Array(props.rating).fill().map(()=>{
              return (<p>⭐</p>)
            })
          }
        </div>
      </div>
      <img src={props.image} alt="" />
      <button>Add to basket</button>
    </div>
  );
};

export default Product;
