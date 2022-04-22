import User from '../models/User';

//*Import class
import { useUserUtils } from '../utils/UserUtils';

//update user
export const updatedUser = async (req: any, res: any) => {
   let { password } = req.body;
   const { id } = req.params;

   if (password) {
      password = useUserUtils.encryptPassword(password);
   }

   try {
      const updatedUser = await User.findByIdAndUpdate(
         id,
         {
            $set: req.body,
         },
         { new: true }
      );
      res.status(200).json(useUserUtils.removePassword(updatedUser));
   } catch (error) {
      res.status(500).json(error);
   }
};

//delete user
export const deleteUser = async (req: any, res: any) => {
   try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json('user successfully deleted');
   } catch (error) {
      res.status(500).json(error);
   }
};

//get one specific user
export const getUser = async (req: any, res: any) => {
   try {
      const user = await User.findById(req.params.id);
      res.status(200).json(useUserUtils.removePassword(user));
   } catch (error) {
      res.status(500).json(error);
   }
};

//get all users
export const getAllUsers = async (req: any, res: any) => {
   try {
      const users = await User.find();
      res.status(200).json(useUserUtils.removePwdFromAllUsers(users));
   } catch (error) {
      res.status(500).json(error);
   }
};
