import Cart from '../models/Cart';
import useCRUD from '../utils/CRUD';

//*Type imports
import { Request, Response } from 'express';

//Create
export const createCart = async (req: Request, res: Response) => {
   useCRUD.create(req, res, Cart);
};

//Update cart
export const updateCart = async (req: Request, res: Response) => {
   useCRUD.update(req, res, Cart);
};

//Delete
export const deleteCart = async (req: Request, res: Response) => {
   useCRUD.delete(req, res, Cart);
};

//Get a cart
export const getCart = async (req: Request, res: Response) => {
   useCRUD.getOne(req, res, Cart);
};

//Get all carts
export const getAllCarts = async (req: Request, res: Response) => {
   useCRUD.getAll(req, res, Cart);
};
