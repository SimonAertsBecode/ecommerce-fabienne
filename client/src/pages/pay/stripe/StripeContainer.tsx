import React from 'react';

//Components import
import CheckoutForm from './CheckoutForm';

//Sripe related imports
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_STRIPE_KEY!);
/*
  Don't call loadStripe in component ==> don't want to load more than you have to 
 */

const StripeContainer = () => {
   return (
      <section className='stripe-container'>
         <Elements stripe={stripePromise}>
            <CheckoutForm />
         </Elements>
      </section>
   );
};

export default StripeContainer;
