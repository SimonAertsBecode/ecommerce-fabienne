import React from 'react';
import StripeContainer from '../../stripe/StripeContainer';

const Payment = () => {
   return (
      <section className='payment'>
         <h1>Page de paiement</h1>
         <StripeContainer />
      </section>
   );
};

export default Payment;
