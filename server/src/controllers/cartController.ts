import Cart from '../models/Cart';

//Create
export const createCart = async (req: any, res: any) => {
   const newCart = new Cart(req.body);

   try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
   } catch (error) {
      res.status(500).json(error);
   }
};

//Update cart
export const updateCart = async (req: any, res: any) => {
   const { id } = req.params;

   try {
      const getCart = await Cart.findByIdAndUpdate(
         id,
         {
            $set: req.body,
         },
         { new: true }
      );
      res.status(200).json(getCart);
   } catch (error) {
      res.status(500).json(error);
   }
};

//Delete
export const deleteCart = async (req: any, res: any) => {
   try {
      await Cart.findByIdAndDelete(req.params.id);
      res.status(200).json('cart successfully deleted');
   } catch (error) {
      res.status(500).json(error);
   }
};

//Get a cart
export const getCart = async (req: any, res: any) => {
   const { userId } = req.params;

   try {
      const cart = await Cart.findOne({ userId });
      res.status(200).json(cart);
   } catch (error) {
      res.status(500).json(error);
   }
};

//Get all carts
export const getAllCarts = async (req: any, res: any) => {
   try {
      const carts = await Cart.find().sort({ id: -1 });
      res.status(200).json(carts);
   } catch (error) {
      res.status(500).json(error);
   }
};
