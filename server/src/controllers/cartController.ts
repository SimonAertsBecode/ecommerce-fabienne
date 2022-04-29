import Cart from '../models/Cart';
import useCRUD from '../utils/CRUD';

//Create
export const createCart = async (req: any, res: any) => {
   useCRUD.create(req, res, Cart);
};

//Update cart
export const updateCart = async (req: any, res: any) => {
   useCRUD.update(req, res, Cart);
};

//Delete
export const deleteCart = async (req: any, res: any) => {
   useCRUD.delete(req, res, Cart);
};

//Get a cart
export const getCart = async (req: any, res: any) => {
   useCRUD.getOne(req, res, Cart);
};

//Get all carts
export const getAllCarts = async (_: null, res: any) => {
   useCRUD.getAll(null, res, Cart);
};
