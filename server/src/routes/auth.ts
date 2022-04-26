import Router from 'express';
import * as AuthControllers from '../controllers/authController';

const authRouter = Router();

authRouter.post('/register', AuthControllers.register);
authRouter.post('/login', AuthControllers.login);

export default authRouter;
