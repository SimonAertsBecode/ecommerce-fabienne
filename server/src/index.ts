import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

//*Routes import
import authRouter from './routes/auth';
import userRouter from './routes/user';
import productRouter from './routes/product';
import cartRouter from './routes/cart';
import orderRouter from './routes/order';
import stripeRouter from './stripe/route';

dotenv.config();

const app = express();

app.use(cookieParser());
app.use(
   cors({
      credentials: true,
      origin: 'http://localhost:3000',
   })
);

mongoose
   .connect(process.env.MONGO_URL!)
   .then(() => {
      console.log('DBConnection successfull');
   })
   .catch((err) => {
      console.log(err);
   });

app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use('/api/orders', orderRouter);
app.use('/api/pay', stripeRouter);

app.listen(process.env.PORT || 5000, () => {
   console.log('App is running on port 5000');
});
