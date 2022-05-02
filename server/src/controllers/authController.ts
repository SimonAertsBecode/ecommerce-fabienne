import User from '../models/User';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';

//*Type imports
import { Request, Response } from 'express';

//*Import class
import { useUserUtils } from '../utils/UserUtils';

//**Import error management */
import { handleFormError } from '../utils/errorManagement';

//*REGISTER
export const register = async (req: Request, res: Response) => {
   const { username, email, password } = req.body;

   const newUser = new User({
      username: username,
      email: email,
      password: useUserUtils.encryptPassword(password),
   });

   try {
      const savedUser = await newUser.save();
      res.status(201).json(useUserUtils.removePassword(savedUser));
   } catch (error) {
      res.status(500).json(handleFormError(error));
   }
};

//*LOGIN
export const login = async (req: Request, res: Response) => {
   const { username, password: requestPassword } = req.body;
   try {
      const user = await User.findOne({ username: username });
      if (!user) return !user && res.status(401).json('no match for that username');

      const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET!);
      const decryptedPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
      if (decryptedPassword !== requestPassword) return res.status(401).json('wrong password');

      const accessToken = jwt.sign(
         {
            id: user._id,
            isAdmin: user.isAdmin,
         },
         process.env.JWT_SECRET_KEY!,
         { expiresIn: 3600 * 24 * 3 }
      );

      console.log(accessToken);

      return res.status(200).json({ ...useUserUtils.removePassword(user), accessToken });
   } catch (error) {
      //error message already handled by mongoDB
      res.status(500).json(error);
   }
};
