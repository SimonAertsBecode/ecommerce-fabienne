import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartRedux';
import { combineReducers } from 'redux';

export const store = configureStore({
   reducer: {
      cart: cartReducer,
   },
});

const rootReducer = combineReducers({ cart: cartReducer });

export type IRootState = ReturnType<typeof rootReducer>;
