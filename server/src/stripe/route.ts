import Router from 'express';

import stripeIntent from './controller';

const stripeRouter = Router();

stripeRouter.post('/payment_intents', stripeIntent);

export default stripeRouter;
