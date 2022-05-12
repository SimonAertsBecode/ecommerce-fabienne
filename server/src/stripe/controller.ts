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
