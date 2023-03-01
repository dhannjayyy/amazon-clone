/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { useHref } from "react-router-dom";
import { useBasketState } from "../Context provider/basketStateProvider";
import "./Checkout.scss";

const BasketItem = ({ id, image, title, price, rating, hideButton, page }) => {
  const [, dispatch] = useBasketState();
  const product = useRef();

  var siblings = [];

  const slideUpAnimation = (element) => {
    if (element == null) {
      siblings.forEach((product) => {
        product.classList.add("slideUpAnimation");
      });
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
    }, 500);
  };
  const removeWishlistItem = () => {
    product.current.id = "slideAnimation";
    slideUpAnimation(product.current.nextElementSibling);
    setTimeout(() => {
      dispatch({
        type: "REMOVE_FROM_WISHLIST",
        item: {
          id: id,
        },
      });
    }, 500);
  };

  const moveToWishlist = () => {
    product.current.id = "slideAnimation";
    slideUpAnimation(product.current.nextElementSibling);
    setTimeout(() => {
      dispatch({
        type: "BASKET_TO_WISHLIST",
        item: {
          id: id,
          title: title,
          price: price,
          image: image,
          rating: rating,
        },
      });
    }, 500);
  };

  const wishlistToBasket = () => {
    product.current.id = "slideAnimation";
    slideUpAnimation(product.current.nextElementSibling);
    setTimeout(() => {
      dispatch({
        type: "WISHLIST_TO_BASKET",
        item: {
          id: id,
          title: title,
          price: price,
          image: image,
          rating: rating,
        },
      });
    }, 500);
  };

  return (
    <div ref={product} className="basketItem">
      <img className="basketItem_image" src={image} alt="" />
      <div className="basketItem_info">
        <p className="basketItem_title">{title}</p>
        <p className="basketItem_price">
          <small>INR</small>
          <strong>{price}</strong>
        </p>
        <div className="basketItem_rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p key={i}>⭐</p>;
            })}
        </div>
        {!hideButton && (
          <div className="wishlist_products">
            <button onClick={removeBasketItem}>Remove from basket</button>
            <button className="wishlistButton" onClick={moveToWishlist}>
              Move to wishlist
            </button>
          </div>
        )}
        {page === "wishlist" && (
          <div className="wishlist_products">
            <button onClick={wishlistToBasket}>Move to basket</button>

            <button onClick={removeWishlistItem}>Remove from wishlist</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasketItem;
