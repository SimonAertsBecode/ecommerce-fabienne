import { UserUtils } from './UserUtils';

//**Models import
import Cart from '../models/Cart';
import Product from '../models/Product';
import Order from '../models/Order';
import User from '../models/User';

//*Type import
import { Request, Response } from 'express';

type models = typeof Cart | typeof Order | typeof Product | typeof User;

class CRUD extends UserUtils {
   constructor() {
      super();
   }

   async create(req: Request, res: Response, model: models) {
      const newModel = new model(req.body);

      try {
         const savedModel = await newModel.save();
         res.status(200).json(savedModel);
      } catch (error) {
         res.status(500).json(error);
      }
   }

   async update(req: Request, res: Response, model: models) {
      const { id } = req.params;

      try {
         const getItem = await model.findByIdAndUpdate(
            id,
            {
               $set: req.body,
            },
            { new: true }
         );
         res.status(200).json(model === User ? this.removePassword(getItem) : getItem);
      } catch (error) {
         res.status(500).json(error);
      }
   }

   async delete(req: Request, res: Response, model: models) {
      try {
         await model.findByIdAndDelete(req.params.id);
         res.status(200).json(`${model} has been deleted successfully`);
      } catch (error) {
         res.status(500).json(error);
      }
   }

   async getOne(req: Request, res: Response, model: models) {
      if (model === Order || Cart) {
         //Var declaration to be able to access it outside of the if()scope
         var { userId: rightId } = req.params;
      } else {
         var { id: rightId } = req.params;
      }

      try {
         const item = await model.findOne({ rightId });
         res.status(200).json(model === User ? this.removePassword(item) : item);
      } catch (error) {
         res.status(500).json(error);
      }
   }

   async getAll(req: Request, res: Response, model: models) {
      try {
         const allItems = await model.find().sort({ id: -1 });
         res.status(200).json(model === User ? this.removePwdFromAllUsers(allItems) : allItems);
      } catch (error) {
         res.status(500).json(error);
      }
   }
}

const useCRUD = new CRUD();
export default useCRUD;
