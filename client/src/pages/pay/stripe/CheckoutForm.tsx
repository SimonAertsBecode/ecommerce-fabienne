import { FormEvent, useState } from 'react';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import FormDetailsFields from './FormDetailsFields';
import CheckoutError from '../../../components/prebuilt/CheckoutError';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../redux/store';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
   const [isProcessing, setProcessingTo] = useState(false);
   const [checkoutError, setCheckoutError] = useState<string | undefined>();
   const navigate = useNavigate();

   const total = useSelector((state: IRootState) => state.cart.total);
   const stripe = useStripe();
   const elements = useElements();

   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setProcessingTo(true);

      const { name, email, address, city, postal } = event.target as typeof event.target & {
         name: { value: string };
         email: { value: string };
         address: { value: string };
         city: { value: string };
         postal: { value: string };
      };

      const billingDetails = {
         name: name.value,
         email: email.value,
         address: {
            line1: address.value,
            city: city.value,
            postal_code: postal.value,
         },
      };

      if (!stripe || !elements) return;

      try {
         const { data: clientSecret } = await axios.post(`${process.env.REACT_APP_SERVER_URL!}pay/payment_intents`, {
            amount: total * 100,
         });

         const cardElement = elements.getElement(CardElement)!;

         const { error } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
               card: cardElement,
               billing_details: billingDetails,
            },
         });

         if (error) {
            setCheckoutError(error.message);
            setProcessingTo(false);
            return;
         }

         setCheckoutError(undefined);
         navigate('/pay/success');
      } catch (error: any) {
         if (error) {
            setCheckoutError(error.message);
         }
      }

      setProcessingTo(false);
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
         <form onSubmit={(e) => handleSubmit(e)}>
            <section className='form-details'>
               <FormDetailsFields />
            </section>
            <section className='card-element'>
               <CardElement options={cardElementOpts} />
            </section>
            <section>{checkoutError}</section>
            <button disabled={isProcessing || !stripe}>{isProcessing ? 'Processing...' : `Payer ${total} EUR`}</button>
         </form>
      </section>
   );
};

export default CheckoutForm;
