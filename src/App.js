/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./App.css";
import HomePage from "./Pages/HomePage";
import CheckoutPage from "./Pages/CheckoutPage";
import PaymentPage from "./Pages/PaymentPage";
import LoginPage from "./Pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useBasketState } from "./components/Context provider/basketStateProvider";
import OrdersPage from "./Pages/OrdersPage";
import NotFoundPage from "./Pages/NotFoundPage";
import WishlistPage from "./Pages/WishlistPage";

const App = () => {
  const [{ user, basket, throughCheckout }, dispatch] = useBasketState();

  useEffect(() => {
    onAuthStateChanged(auth, (authObject) => {
      if (authObject) {
        dispatch({
          type: "SET_USER",
          user: authObject,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="orders" element={<OrdersPage />} />
        {user ? (
          <Route path="login" element={<HomePage />} />
        ) : (
          <Route path="login" element={<LoginPage />} />
        )}
        {basket.length > 0 && (
          <Route path="payment" element={<PaymentPage />} />
        )}
        <Route path="wishlist" element={<WishlistPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
