export interface IProduct {
   _id: string;
   title: string;
   description: string;
   image: string;
   price: number;
}

export interface IUser {
   _id: string,
   username: string,
   email: string,
   isAdmin : boolean
   accessToken : string
}