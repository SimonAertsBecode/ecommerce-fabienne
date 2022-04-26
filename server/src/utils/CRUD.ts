// import {UserUtils} from './UserUtils'
// import Cart from '../models/Cart'
// import Product from '../models/Product'
// import Order from '../models/Order'
// import User from '../models/User'

// interface cart {
//    userId: string;
//    products: [
//       {
//          productId: string;
//          quantity: number;
//       }
//    ];
// }

// interface orders {
//    userId: string;
//    products: [
//       {
//          productId: string;
//          quantity: number;
//       }
//    ];
//    amount: number;
//    address: [string | number];
//    status: string;
// }

// interface product {
//    title: string;
//    description: string;
//    image: string;
//    price: number;
// }

// interface user {
//    username: string
//    email: string,
//    password: string,
//    isAdmin: boolean
// }

// type models = cart | orders | product | user;

// class CRUD extends UserUtils {

//     constructor(public model: models) {
//         super();
//     }

//    create(req: any, res: any) {
//        const newCart = new this.model(req.body);

//    try {
//       const savedCart = await newCart.save();
//       res.status(200).json(savedCart);
//    } catch (error) {
//       res.status(500).json(error);
//    }
// }
