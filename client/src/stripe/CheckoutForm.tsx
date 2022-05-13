import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = () => {
   const stripe = useStripe();
   const elements = useElements();

   return (
      // <form onSubmit={handleSubmit}>

      // </form>
      <h1>Checkout</h1>
   );
};

export default CheckoutForm;
