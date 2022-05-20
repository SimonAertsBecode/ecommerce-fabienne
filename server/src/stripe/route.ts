import Router from 'express';

import * as stripe from './controller';

const stripeRouter = Router();

stripeRouter.post('/payment');
stripeRouter.post('/create-checkout-session', stripe.checkoutSession);

export default stripeRouter;
