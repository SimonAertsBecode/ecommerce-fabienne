import Product from '../models/Product';
import useCRUD from '../utils/CRUD';

//*Type imports
import { Request, Response } from 'express';

//Create product
export const createProduct = async (req: Request, res: Response) => {
   useCRUD.create(req, res, Product);
};

//Update
export const updateProduct = async (req: Request, res: Response) => {
   useCRUD.update(req, res, Product);
};

//Delete
export const deleteProduct = async (req: Request, res: Response) => {
   useCRUD.delete(req, res, Product);
};

//Get a product
export const getProduct = async (req: Request, res: Response) => {
   useCRUD.getOne(req, res, Product);
};

//Get all products
export const getAllProducts = async (req: Request, res: Response) => {
   useCRUD.getAll(req, res, Product);
};
