import React from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

const Pay = () => {
   const location = useLocation();
   const { pathname } = location;

   const checkout = () => {
      axios
         .post('http://localhost:5000/pay/create-checkout-session', {
            items: [
               { id: 1, quantity: 2 },
               { id: 2, quantity: 5 },
            ],
         })
         .then((res) => {
            console.log('success');
            console.log(res);
         })
         .catch((err) => {
            console.log('failed');
            console.log(err);
         });
   };

   return (
      <section className='pay-page'>
         <h1>Page concernée au paiement</h1>
         <Link to={`${pathname}/payment`}>
            <button>aller payer</button>
         </Link>
         <button onClick={checkout}>Checkout</button>
      </section>
   );
};

export default Pay;
