import React from "react";
import "./Checkout.scss";
import CurrencyFormat from "react-currency-format";
import { useBasketState } from "../Context provider/basketStateProvider";

const Subtotal = () => {
  const [state,dispatch] = useBasketState()
  
  const calculateValue = () => {
    if(state.basket){
      var value = state?.basket.reduce((total,current)=>{
        total += current.price;
        return total
      },0)
    }
    return value
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({state.basket?.length} items) : <strong>{calculateValue()}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift.
            </small>
          </>
        )}
        decimalScale = {2}
        value = {0}
        displayType={"text"}
        thousandSeparator = {true}
        prefix = {"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
