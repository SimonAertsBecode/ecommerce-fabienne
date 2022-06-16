import jwt from 'jsonwebtoken';

//*Import types
import { Request, Response, NextFunction } from 'express';

//Verifies if token received with request is the the same as the one set in user.accessToken (user model)
export const verifyToken = (req: any, res: Response, next: NextFunction) => {
   // const token = req.headers.token;
   console.log(req);
   // if (token) {
   //    jwt.verify(token.toString(), process.env.JWT_SECRET_KEY!, (err: any, userData: any) => {
   //       if (err) res.status(403).json('Token is not valid!');
   //       req.user = userData;
   //       next();
   //    });
   // } else {
   //    return res.status(401).json('You are not authenticated');
   // }
};

//Verifies if ids are equals, to be sure that the user is updating his datas or if it is an admin that is updating
export const verifyTokenAndAuthorization = (req: any, res: Response, next: NextFunction) => {
   verifyToken(req, res, () => {
      if (req.user.id === (req.params.userId || req.params.id) || req.user.isAdmin) {
         next();
      } else {
         res.status(403).json('You are not allowed to do that!');
      }
   });
};

//Checks is manipulation is done by admin
export const verifyTokenAndAdmin = (req: any, res: Response, next: NextFunction) => {
   verifyToken(req, res, () => {
      if (req.user.isAdmin) {
         next();
      } else {
         res.status(403).json('Only admin can do these updates');
      }
   });
};
