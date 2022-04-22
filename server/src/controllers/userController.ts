import User from '../models/User';

//*Import class
import { useAuthUtils } from '../utils/AuthUtils';

export const updatedUser = async (req: any, res: any) => {
   let { password } = req.body;
   const { id } = req.params;

   if (password) {
      password = useAuthUtils.encryptPassword(password);
   }

   try {
      const updatedUser = await User.findByIdAndUpdate(
         id,
         {
            $set: req.body,
         },
         { new: true }
      );
      res.status(200).json(useAuthUtils.removePassword(updatedUser));
   } catch (error) {
      res.status(500).json(error);
   }
};
