import Router from 'express';

const stripeRouter = Router();

stripeRouter.post('/payment');

export default stripeRouter;
