import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState,useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useNavigate } from "react-router-dom";
import BasketItem from "../Checkout/BasketItem";
import { useBasketState } from "../Context provider/basketStateProvider";
import { getBasketValue } from "../Context provider/reducer";
import "./Payment.scss";
import  axios from "./axios";
import { db } from "../../firebase";

const Payment = () => {
  const [{ basket, user }, dispatch] = useBasketState();
  const history = useNavigate();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  const stripe = useStripe();
  const Elements = useElements();

  useEffect(() => {
    //generate the special stripe secret which allows us to charge a customer

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //STRIPE expects the total in a currencies subunits
        url: `payments/create?total=${getBasketValue(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret)
    };

    getClientSecret();
  }, [basket]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: Elements.getElement(CardElement)
        },
      })
      .then(({ paymentIntent }) => {
        //paymentItent = payment confirmation

        db.collection('users').doc

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type:"EMPTY_BASKET"
        })

        history("/orders",'replace')
      });
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
                  value={getBasketValue(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"INR"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>

                {/* FOR ERROR */}
                {error && <div>{error}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
