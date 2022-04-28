import { UserUtils } from './UserUtils';

//**Models import
import Cart from '../models/Cart';
import Product from '../models/Product';
import Order from '../models/Order';
import User from '../models/User';

// interface cart {
//    userId: string;
//    products: [
//       {
//          productId: string;
//          quantity: number;
//       }
//    ];
// }

// interface orders {
//    userId: string;
//    products: [
//       {
//          productId: string;
//          quantity: number;
//       }
//    ];
//    amount: number;
//    address: [string | number];
//    status: string;
// }

// interface product {
//    title: string;
//    description: string;
//    image: string;
//    price: number;
// }

// interface user {
//    username: string
//    email: string,
//    password: string,
//    isAdmin: boolean
// }

type models = typeof Cart | typeof Order | typeof Product | typeof User;

class CRUD extends UserUtils {
   constructor() {
      super();
   }

   async create(req: any, res: any, model: models) {
      const newModel = new model(req.body);

      try {
         const savedModel = await newModel.save();
         res.status(200).json(savedModel);
      } catch (error) {
         res.status(500).json(error);
      }
   }

   async update(req: any, res: any, model: models) {
      const { id } = req.params;

      try {
         const getItem = await model.findByIdAndUpdate(
            id,
            {
               $set: req.body,
            },
            { new: true }
         );
         res.status(200).json(getItem);
      } catch (error) {
         res.status(500).json(error);
      }
   }

   async delete(req: any, res: any, model: models) {
      try {
         await model.findByIdAndDelete(req.params.id);
         res.status(200).json('cart successfully deleted');
      } catch (error) {
         res.status(500).json(error);
      }
   }

   async getOne(req: any, res: any, model: models) {
      if (model === Order || Cart) {
         //Var declaration to be able to access it outside of the if()scope
         var { userId: rightId } = req.params;
      } else {
         var { id: rightId } = req.params;
      }

      try {
         const item = await model.findOne({ rightId });
         res.status(200).json(item);
      } catch (error) {
         res.status(500).json(error);
      }
   }

   async getAll(_: null, res: any, model: models) {
      try {
         const allItems = await model.find().sort({ id: -1 });
         res.status(200).json(allItems);
      } catch (error) {
         res.status(500).json(error);
      }
   }
}

const useCRUD = new CRUD();
export default useCRUD;
