import { createSlice } from '@reduxjs/toolkit';

//*Interfaces
import { IProduct } from '../utils/interface/interfaces';

const cartSlice = createSlice({
   name: 'cart',
   initialState: {
      products: [] as IProduct[],
      quantity: 0,
      total: 0,
   },
   reducers: {
      addProduct: (state, action) => {
         const { product } = action.payload;
         state.quantity += 1;
         state.products.push(product);
         state.total += product.price;
      },
      deleteProduct: (state, action) => {
         const { product } = action.payload;
         state.quantity -= 1;
         state.products = state.products.filter((stateProduct) => {
            return stateProduct._id !== product._id;
         });
         state.total -= product.price;
      },
   },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
