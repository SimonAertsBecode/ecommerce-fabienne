import jwt from 'jsonwebtoken';

//Verifies if token received with request is the the same as the one set in user.accessToken
export const verifyToken = (req: any, res: any, next: any) => {
   const authHeader = req.headers.token;
   if (authHeader) {
      jwt.verify(authHeader, process.env.JWT_SECRET_KEY!, (err: any, userData: any) => {
         if (err) res.status(403).json('Token is not valid!');
         req.user = userData;
         next();
      });
   } else {
      return res.status(401).json('You are not authenticated');
   }
};

//Verifies if ids are equals, to be sure that the user is updating his datas or if it is an admin that is updating
export const verifyTokenAndAuthorization = (req: any, res: any, next: any) => {
   verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
         next();
      } else {
         res.status(403).json('You are not allowed to do that!');
      }
   });
};
