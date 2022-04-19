import { Router } from 'express';

const userRoutes = Router();

userRoutes.get('/usertest', (_, res) => {
   res.send('usertest good');
});

export default userRoutes;
