import React, { useEffect, useState } from "react";
import "./Orders.scss";
import { db } from "../../firebase";
import { useBasketState } from "../Context provider/basketStateProvider";
import {
  collection,

  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import OrderItem from "./OrderItem";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useBasketState();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      try {
        const orderListRef = collection(db, "users", user?.uid, "orders");
        const orderListSorted = query(orderListRef, orderBy("created", "desc"));

        onSnapshot(orderListSorted, (querySnapshot) => {
          setOrders(
            querySnapshot.docs.map((element) => ({
              id: element.id,
              data: element.data(),
            }))
          );
        });
      } catch (error) {
        setError(error)
      }
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => {
          return <OrderItem order={order}/>;
        })}
      </div>
      {/* FOR ERROR */}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Orders;
