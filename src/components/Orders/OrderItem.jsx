import moment from "moment/moment";
import React from "react";
import CurrencyFormat from "react-currency-format";
import BasketItem from "../Checkout/BasketItem";

const OrderItem = ({ order }) => {
  return (
    <div className="orderItem">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mm a")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item, index) => {
        return (
          <BasketItem
            key={`${index}_${item.id}`}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
            hideButton = {true}
          />
        );
      })}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"INR "}
      />
    </div>
  );
};

export default OrderItem;
