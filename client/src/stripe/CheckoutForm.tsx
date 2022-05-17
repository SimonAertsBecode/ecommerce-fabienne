import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import FormDetailsFields from '../components/prebuilt/FormDetailsFields';

const CheckoutForm = () => {
   const [checkoutError, setCheckoutError] = useState();
   const [input, setInput] = useState({})

   const stripe = useStripe();
   const elements = useElements();

   const handleSubmit = async (e: React.SyntheticEvent) => {
      e.preventDefault();
   };

   const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
      setInput({
         ...input,
         [e.currentTarget.name]: e.currentTarget.value,
      });


   const iframeStyles = {
      base: {
         color: '#fff',
         fontSize: '16px',
         iconColor: '#fff',
         '::placeholder': {
            color: '#87bbfd',
         },
      },
      invalid: {
         iconColor: '#FFC7EE',
         color: '#FFC7EE',
      },
      complete: {
         iconColor: '#cbf4c9',
      },
   };

   const cardElementOpts = {
      iconStyle: 'solid' as const,
      style: iframeStyles,
      hidePostalCode: true,
   };

   return (
      <>
         <h1>Stripe checkout form</h1>
         <form onSubmit={handleSubmit}>
            <FormDetailsFields />
            <CardElement options={cardElementOpts} />
            {/* <CheckoutError>{checkoutError}</CheckoutError> */}
            <button>Payer</button>
         </form>
      </>
   );
};

export default CheckoutForm;
