import Order from '../models/Order';

//Create
export const createOrder = async (req: any, res: any) => {
   const newOrder = new Order(req.body);

   try {
      const savedOrder = await newOrder.save();
      res.status(200).json(savedOrder);
   } catch (error) {
      res.status(500).json(error);
   }
};

//Update Order
export const updateOrder = async (req: any, res: any) => {
   const { id } = req.params;

   try {
      const getOrder = await Order.findByIdAndUpdate(
         id,
         {
            $set: req.body,
         },
         { new: true }
      );
      res.status(200).json(getOrder);
   } catch (error) {
      res.status(500).json(error);
   }
};

//Delete
export const deleteOrder = async (req: any, res: any) => {
   try {
      await Order.findByIdAndDelete(req.params.id);
      res.status(200).json('Order successfully deleted');
   } catch (error) {
      res.status(500).json(error);
   }
};

//Get user order
export const getOrder = async (req: any, res: any) => {
   const { userId } = req.params;

   try {
      const order = await Order.find({ userId });
      res.status(200).json(order);
   } catch (error) {
      res.status(500).json(error);
   }
};

//Get all Orders
export const getAllOrders = async (req: any, res: any) => {
   try {
      const orders = await Order.find().sort({ id: -1 });
      res.status(200).json(orders);
   } catch (error) {
      res.status(500).json(error);
   }
};
