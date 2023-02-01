import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React,{useState} from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import BasketItem from "../Checkout/BasketItem";
import { useBasketState } from "../Context provider/basketStateProvider";
import "./Payment.scss";

const Payment = () => {
  const [{ basket, user }, dispatch] = useBasketState();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const stripe = useStripe();
  const Elements = useElements();

  const handleSubmit = (e) => {
    //something
  };

  const handleChange = (e) => {
    //LISTEN FOR CHANGES IN THE CARDELEMENT
    //AND DISPLAY ANY ERRORS AS THE CUSTOMER TYPES THEIR CARD DETAILS
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout"> {basket.length} items </Link>){" "}
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item, index) => {
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
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total : {value}</h3>}
                  decimalScale={2}
                  // value={calculateValue()}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
