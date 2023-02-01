import React from "react";
import Header from "../components/Header/Header";
import Payment from "../components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51MW30cSCubCFnNg70b0x64rfC7GD4H9bGNGJeQuXySxxObDxUHBifTAgauua0OUPqmKOix02H1P3rzVtsSEKqjLJ00Vst0Uzhh"
);

const PaymentPage = () => {
  return (
    <>
      <Header />
      <Elements stripe={promise}>
        <Payment />
      </Elements>
    </>
  );
};

export default PaymentPage;
