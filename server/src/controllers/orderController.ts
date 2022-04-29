import Order from '../models/Order';
import useCRUD from '../utils/CRUD';

//Create
export const createOrder = async (req: any, res: any) => {
   useCRUD.create(req, res, Order);
};

//Update Order
export const updateOrder = async (req: any, res: any) => {
   useCRUD.update(req, res, Order);
};

//Delete
export const deleteOrder = async (req: any, res: any) => {
   useCRUD.delete(req, res, Order);
};

//Get user order
export const getOrder = async (req: any, res: any) => {
   useCRUD.getOne(req, res, Order);
};

//Get all Orders
export const getAllOrders = async (_: null, res: any) => {
   useCRUD.getAll(null, res, Order);
};
