import Order from '../models/Order';
import useCRUD from '../utils/CRUD';

//*Type imports
import { Request, Response } from 'express';

//Create
export const createOrder = async (req: Request, res: Response) => {
   useCRUD.create(req, res, Order);
};

//Update Order
export const updateOrder = async (req: Request, res: Response) => {
   useCRUD.update(req, res, Order);
};

//Delete
export const deleteOrder = async (req: Request, res: Response) => {
   useCRUD.delete(req, res, Order);
};

//Get user order
export const getOrder = async (req: Request, res: Response) => {
   useCRUD.getOne(req, res, Order);
};

//Get all Orders
export const getAllOrders = async (req: Request, res: Response) => {
   useCRUD.getAll(req, res, Order);
};
