import Router from 'express';
import * as cartController from '../controllers/cartController';

//**MiddleWare
import { verifyTokenAndAuthorization, verifyToken } from '../middleware/verifyToken';

const cartRouter = Router();

cartRouter.post('/', verifyToken, cartController.createCart);
cartRouter.put('/:id', verifyTokenAndAuthorization, cartController.updateCart);
cartRouter.delete('/:id', verifyTokenAndAuthorization, cartController.deleteCart);
cartRouter.get('/find/:userId', verifyTokenAndAuthorization, cartController.getCart);

export default cartRouter;
