import React, { useRef } from "react";
import { useBasketState } from "../Context provider/basketStateProvider";
import "./Checkout.scss";

const BasketItem = ({ id, image, title, price, rating }) => {
  const [state, dispatch] = useBasketState();
  const product = useRef();

  const findIndexToUpdateInState = () => {
    var index = 0;
    var collection = product.current.parentElement.children;
    for (var children in collection) {
      if (collection[children].tagName === "DIV") {
        index += 1;
        if(collection[children].id === "slideAnimation") return index
      }
    }
  };

  const removeBasketItem = () => {
    product.current.id = "slideAnimation";
    var indexToUpdateInState = findIndexToUpdateInState()
    // console.log(indexToUpdateInState)
    setTimeout(()=>{
      dispatch({
        type: "REMOVE_FROM_BASKET",
        item: {
          id: id,
          index : indexToUpdateInState,
        },
      });
      // product.current.id = "";
    },500)
  };

  return (
    <div ref={product} className="basketItem">
      <img className="basketItem_image" src={image} alt="" />
      <div className="basketItem_info">
        <p className="basketItem_title">{title}</p>
        <p className="basketItem_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="basketItem_rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p key={i}>⭐</p>;
            })}
        </div>
        <button onClick={removeBasketItem}>Remove from basket</button>
      </div>
    </div>
  );
};

export default BasketItem;
