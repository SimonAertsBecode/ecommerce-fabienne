import Router from 'express';
import * as userController from '../controllers/userController';

//**MiddleWare
import { verifyTokenAndAuthorization, verifyTokenAndAdmin } from '../middleware/verifyToken';

const userRouter = Router();

userRouter.put('/:id', verifyTokenAndAuthorization, userController.updatedUser);
userRouter.delete('/:id', verifyTokenAndAdmin, userController.deleteUser);
userRouter.get('/find/:id', verifyTokenAndAdmin, userController.getUser);
userRouter.get('/', verifyTokenAndAdmin, userController.getAllUsers);

export default userRouter;
