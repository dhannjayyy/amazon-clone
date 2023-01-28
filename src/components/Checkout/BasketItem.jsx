import React, { useRef } from "react";
import { useBasketState } from "../Context provider/basketStateProvider";
import "./Checkout.scss";

const BasketItem = ({ id, image, title, price, rating }) => {
  const [state, dispatch] = useBasketState();
  const product = useRef();

  var siblings = [];
  const slideUpAnimation = (element) => {
    if (element == null) {
      siblings.forEach((product)=>{
        product.classList.add("slideUpAnimation")
      })
      return;
    }
    siblings.push(element);
    slideUpAnimation(element.nextElementSibling);
  };

  const removeBasketItem = () => {
    product.current.id = "slideAnimation";
    slideUpAnimation(product.current.nextElementSibling);
    setTimeout(() => {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        item: {
          id: id,
        },
      });
    }, 600);
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
