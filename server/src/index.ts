import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user';

const app = express();
dotenv.config();

mongoose
   .connect(process.env.MONGO_URL!)
   .then(() => {
      console.log('DBConnection successfull');
   })
   .catch((err) => {
      console.log(err);
   });

app.use(express.json());
app.use('/api/user', userRoutes);

app.listen(process.env.PORT || 5000, () => {
   console.log('App is running on port 5000');
});
