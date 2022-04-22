import Router from 'express';
import * as AuthControllers from '../controllers/authController';

const authRouter = Router();

//*Register
authRouter.post('/register', AuthControllers.register);
//*Login
authRouter.post('/login', AuthControllers.login);

export default authRouter;
