import Router from 'express';
import User from '../models/User';
import CryptoJS from 'crypto-js';

//*Import class
import { useAuthUtils } from '../utils/AuthUtils';

const authRouter = Router();

//*Register
authRouter.post('/register', async (req, res) => {
   const { username, email, password } = req.body;

   const newUser = new User({
      username: username,
      email: email,
      password: CryptoJS.AES.encrypt(password, process.env.PASSWORD_SECRET!).toString(),
   });

   try {
      const savedUser = await newUser.save();
      res.status(201).json(useAuthUtils.removePassword(savedUser));
   } catch (error) {
      res.status(500).json(error);
   }
});

//*Login
authRouter.post('/login', async (req, res) => {
   const { username, password: requestPassword } = req.body;
   try {
      const user = await User.findOne({ username: username });
      if (!user) return !user && res.status(401).json('wrong credentials');

      const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET!);
      const decryptedPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
      if (decryptedPassword !== requestPassword) return res.status(401).json('wrong credentials');

      return res.status(200).json(useAuthUtils.removePassword(user));
   } catch (error) {
      res.status(500).json(error);
   }
});

export default authRouter;
