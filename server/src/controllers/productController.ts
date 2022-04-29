import Product from '../models/Product';
import useCRUD from '../utils/CRUD';

//Create product
export const createProduct = async (req: any, res: any) => {
   useCRUD.create(req, res, Product);
};

//Update
export const updateProduct = async (req: any, res: any) => {
   useCRUD.update(req, res, Product);
};

//Delete
export const deleteProduct = async (req: any, res: any) => {
   useCRUD.delete(req, res, Product);
};

//Get a product
export const getProduct = async (req: any, res: any) => {
   useCRUD.getOne(req, res, Product);
};

//Get all products
export const getAllProducts = async (_: null, res: any) => {
   useCRUD.getAll(null, res, Product);
};
