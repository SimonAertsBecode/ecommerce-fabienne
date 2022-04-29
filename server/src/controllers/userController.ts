import User from '../models/User';
import useCRUD from '../utils/CRUD';

//*Type imports
import { Request, Response } from 'express';

//*Import class
import { useUserUtils } from '../utils/UserUtils';

//update user
export const updatedUser = async (req: Request, res: Response) => {
   let { password } = req.body;

   if (password) {
      password = useUserUtils.encryptPassword(password);
   }

   useCRUD.update(req, res, User);
};

//delete user
export const deleteUser = async (req: Request, res: Response) => {
   useCRUD.delete(req, res, User);
};

//get one specific user
export const getUser = async (req: Request, res: Response) => {
   useCRUD.getOne(req, res, User);
};

//get all users
export const getAllUsers = async (req: Request, res: Response) => {
   useCRUD.getAll(req, res, User);
};
