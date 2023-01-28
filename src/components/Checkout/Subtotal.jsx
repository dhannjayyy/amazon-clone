import React from "react";
import "./Checkout.scss";
import CurrencyFormat from "react-currency-format";
import { useBasketState } from "../Context provider/basketStateProvider";
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
  const [state, dispatch] = useBasketState();
  const navigate = useNavigate();

  const calculateValue = () => {
    if (state.basket) {
      var value = state?.basket.reduce((total, current) => {
        total += current.price;
        return total;
      }, 0);
    }
    return value;
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({state.basket?.length} items) :{" "}
              <strong>{calculateValue()}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => navigate("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
