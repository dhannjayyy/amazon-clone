import React from "react";
import "./Checkout.scss";
import CurrencyFormat from "react-currency-format";
import { useBasketState } from "../Context provider/basketStateProvider";
import { useNavigate } from "react-router-dom";
import { getBasketValue } from "../Context provider/reducer";

const Subtotal = () => {
  const [{basket}, dispatch] = useBasketState();
  const navigate = useNavigate();


  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items) :
              <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketValue(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"INR "}
      />
      <button onClick={(e) => navigate("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
