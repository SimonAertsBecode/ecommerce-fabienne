import React, { useState } from 'react';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import FormDetailsFields from '../components/prebuilt/FormDetailsFields';

const CheckoutForm = () => {
   const [isProcessing, setProcessingTo] = useState(false);
   const [checkoutError, setCheckoutError] = useState();
   const [input, setInput] = useState({});

   const stripe = useStripe();
   const elements = useElements();

   const handleSubmit = async (e: React.SyntheticEvent) => {
      e.preventDefault();
   };

   const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setInput({
         ...input,
         [e.currentTarget.name]: e.currentTarget.value,
      });
   };

   const iframeStyles = {
      base: {
         color: 'black',
         fontSize: '1.5rem',
         backgroundColor: 'none',
         iconColor: 'black',
         '::placeholder': {
            color: 'black',
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
      <section className='stripe-checkout'>
         <h1>Stripe checkout form</h1>
         <form onSubmit={handleSubmit}>
            <section className='form-details'>
               <FormDetailsFields method={handleInputChange} />
            </section>
            <section className='card-element'>
               <CardElement options={cardElementOpts} />
            </section>

            {/* <CheckoutError>{checkoutError}</CheckoutError> */}
            <button>Payer</button>
         </form>
      </section>
   );
};

export default CheckoutForm;
