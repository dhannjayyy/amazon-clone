import React from "react";
import "./Checkout.scss";
import Subtotal from "./Subtotal";
import BasketItem from "./BasketItem";
import { useBasketState } from "../Context provider/basketStateProvider";

const Checkout = () => {
  const [state] = useBasketState();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout_ad"
        ></img>
        <h2 className="checkout_title">Your shopping basket</h2>
        <div>
          {state.user && (
            <h3 className="checkout_greeting">{`Hello ${state.user.email}`}</h3>
          )}
          {state.basket.map((item, index) => {
            return (
              <BasketItem
                key={`${index}_${item.id}`}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            );
          })}
          {state.basket.length === 0 && <div className="checkout_emptyCart"><p>Your cart is empty.</p></div>}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
