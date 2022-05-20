//*Type imports
import { Request, Response } from 'express';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const payment = async (req: any, res: any) => {
   stripe.charges.create(
      {
         source: req.body.tokenId,
         amount: req.body.amount,
         currency: 'eur',
      },
      (stripeErr: any, stripeRes: any) => {
         if (stripeErr) {
            res.status(500).json(stripeErr);
         } else {
            res.status(200).json(stripeRes);
         }
      }
   );
};

const storeItems = new Map([
   [1, { priceInCents: 10000, name: 'item 1' }],
   [2, { priceInCents: 30000, name: 'item 2' }],
]);

export const checkoutSession = async (req: Request, res: Response) => {
   try {
      const session = await stripe.checkout.session.create({
         payment_method_types: ['card'],
         mode: 'payment',
         line_items: console.log(req),
         success_url: `${process.env.SERVER_URL}/pay/success`,
         cancel_url: `${process.env.SERVER_URL}/pay/cancel`,
      });
      res.status(200).json({ url: session.url });
   } catch (err) {
      res.status(500).json(err);
   }
};
