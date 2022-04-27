import Router from 'express';
import * as orderController from '../controllers/orderController';

//**MiddleWare
import { verifyTokenAndAuthorization, verifyToken, verifyTokenAndAdmin } from '../middleware/verifyToken';

const orderRouter = Router();

orderRouter.post('/', verifyToken, orderController.createOrder);
orderRouter.put('/:id', verifyTokenAndAdmin, orderController.updateOrder);
orderRouter.delete('/:id', verifyTokenAndAdmin, orderController.deleteOrder);
orderRouter.get('/find/:userId', verifyTokenAndAuthorization, orderController.getOrder);
orderRouter.get('/', verifyTokenAndAdmin, orderController.getAllOrders);

export default orderRouter;
