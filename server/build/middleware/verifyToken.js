"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTokenAndAdmin = exports.verifyTokenAndAuthorization = exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// interface reqHeader {
//    headers: IncomingHttpHeaders;
//    params: {
//       id: string;
//    };
//    user: userData;
// }
// interface userData {
//    id: string;
//    isAdmin: boolean;
//    iat: number;
//    exp: number;
// }
//Verifies if token received with request is the the same as the one set in user.accessToken (user model)
const verifyToken = (req, res, next) => {
    const token = req.headers.token;
    if (token) {
        jsonwebtoken_1.default.verify(token.toString(), process.env.JWT_SECRET_KEY, (err, userData) => {
            if (err)
                res.status(403).json('Token is not valid!');
            req.user = userData;
            next();
        });
    }
    else {
        return res.status(401).json('You are not authenticated');
    }
};
exports.verifyToken = verifyToken;
//Verifies if ids are equals, to be sure that the user is updating his datas or if it is an admin that is updating
const verifyTokenAndAuthorization = (req, res, next) => {
    (0, exports.verifyToken)(req, res, () => {
        if (req.user.id === (req.params.userId || req.params.id) || req.user.isAdmin) {
            next();
        }
        else {
            res.status(403).json('You are not allowed to do that!');
        }
    });
};
exports.verifyTokenAndAuthorization = verifyTokenAndAuthorization;
//Checks is manipulation is done by admin
const verifyTokenAndAdmin = (req, res, next) => {
    (0, exports.verifyToken)(req, res, () => {
        if (req.user.isAdmin) {
            next();
        }
        else {
            res.status(403).json('Only admin can do these updates');
        }
    });
};
exports.verifyTokenAndAdmin = verifyTokenAndAdmin;
