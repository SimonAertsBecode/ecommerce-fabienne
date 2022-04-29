import User from '../models/User';
import useCRUD from '../utils/CRUD';

//*Import class
import { useUserUtils } from '../utils/UserUtils';

//update user
export const updatedUser = async (req: any, res: any) => {
   let { password } = req.body;

   if (password) {
      password = useUserUtils.encryptPassword(password);
   }

   useCRUD.update(req, res, User);
};

//delete user
export const deleteUser = async (req: any, res: any) => {
   useCRUD.delete(req, res, User);
};

//get one specific user
export const getUser = async (req: any, res: any) => {
   useCRUD.getOne(req, res, User);
};

//get all users
export const getAllUsers = async (req: any, res: any) => {
   useCRUD.getAll(req, res, User);
};
