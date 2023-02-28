import React, { useEffect, useState } from "react";
import "./Checkout.scss";
import CurrencyFormat from "react-currency-format";
import { useBasketState } from "../Context provider/basketStateProvider";
import { useNavigate } from "react-router-dom";
import { getBasketValue } from "../Context provider/reducer";

const Subtotal = () => {
  const [state,dispatch] = useBasketState();
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (state.user) {
      navigate("/payment");
    } else {
      dispatch({type:"THROUGH_CHECKOUT"})
      navigate("/login");
    }
  };

  useEffect(() => {
    if (state.basket.length === 0) {
      setDisable(true);
    }
  }, [state.basket]);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({state.basket?.length} items) :<strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketValue(state.basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"INR "}
      />
      <button disabled={disable} onClick={handleNavigation}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
