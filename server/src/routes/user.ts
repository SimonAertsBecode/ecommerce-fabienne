import Router from 'express';
import * as userController from '../controllers/userController';

//**MiddleWare
import { verifyTokenAndAuthorization } from '../middleware/verifyToken';

const userRouter = Router();

//update user inofs
userRouter.put('/:id', verifyTokenAndAuthorization, userController.updatedUser);

export default userRouter;
