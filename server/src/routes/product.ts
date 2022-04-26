import Router from 'express';
import * as productController from '../controllers/productController';

//**MiddleWare
import { verifyTokenAndAdmin } from '../middleware/verifyToken';

const productRouter = Router();

productRouter.post('/', verifyTokenAndAdmin, productController.createProduct);
productRouter.put('/:id', verifyTokenAndAdmin, productController.updateProduct);
productRouter.delete('/:id', verifyTokenAndAdmin, productController.deleteProduct);
productRouter.get('/find/:id', productController.getProduct);
productRouter.get('/', productController.getAllProducts);

export default productRouter;
