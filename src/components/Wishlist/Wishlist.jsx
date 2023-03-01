import React from "react";
import BasketItem from "../Checkout/BasketItem";
import { useBasketState } from "../Context provider/basketStateProvider";
import "../Wishlist/Wishlist.scss";

const Wishlist = () => {
  const [state, dispatch] = useBasketState();

  return (
    <div className="wishlist__container">
      <h1 className="wishlist__heading">Your Wishlist</h1>
      <hr className="wishlist__divider" />
      {state.wishlist.length === 0 && (
        <div className="wishlist__emptyMessage">
          <p>Your wishlist seems to be empty...</p>
        </div>
      )}
      <div className="wishlist__itemsList">
        {state.wishlist.map((wishlistItem, index) => {
          return (
            <BasketItem
              key={`${index}_${wishlistItem.id}`}
              id={wishlistItem.id}
              image={wishlistItem.image}
              title={wishlistItem.title}
              price={wishlistItem.price}
              rating={wishlistItem.rating}
              hideButton = {true}
              page="wishlist"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
