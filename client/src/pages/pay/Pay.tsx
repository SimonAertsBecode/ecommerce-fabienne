import React from 'react';
import StripeContainer from '../../stripe/StripeContainer';

const Pay = () => {
   console.log(process.env.REACT_APP_PUBLISHABLE_STRIPE_KEY);
   console.log(typeof process.env.REACT_APP_PUBLISHABLE_STRIPE_KEY);

   return (
      <>
         <h1>Page concernée au paiement</h1>
         {/* <StripeContainer /> */}
      </>
   );
};

export default Pay;
