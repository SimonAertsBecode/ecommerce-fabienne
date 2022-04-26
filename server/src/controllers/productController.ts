import Product from '../models/Product';

//Create product
export const createProduct = async (req: any, res: any) => {
   const newProduct = new Product(req.body);

   try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
   } catch (error) {
      res.status(500).json(error);
   }
};

//Update
export const updateProduct = async (req: any, res: any) => {
   const { id } = req.params;

   try {
      const getProduct = await Product.findByIdAndUpdate(
         id,
         {
            $set: req.body,
         },
         { new: true }
      );
      res.status(200).json(getProduct);
   } catch (error) {
      res.status(500).json(error);
   }
};

//Delete
export const deleteProduct = async (req: any, res: any) => {
   try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json('product successfully deleted');
   } catch (error) {
      res.status(500).json(error);
   }
};

//Get a product
export const getProduct = async (req: any, res: any) => {
   try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
   } catch (error) {
      res.status(500).json(error);
   }
};

//Get all products
export const getAllProducts = async (req: any, res: any) => {
   try {
      const products = await Product.find().sort({ id: -1 });
      res.status(200).json(products);
   } catch (error) {
      res.status(500).json(error);
   }
};
