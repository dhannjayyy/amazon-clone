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


function App() {
  const [{},dispatch] = useBasketState()

  useEffect(()=>{
    onAuthStateChanged(auth,(authObject)=>{
      if(authObject){
        dispatch({
          type: 'SET_USER',
          user: authObject
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="login" element={<LoginPage />}/>
        <Route path="payment" element={<PaymentPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
