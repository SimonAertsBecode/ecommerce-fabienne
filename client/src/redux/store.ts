import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartRedux';
import authReducer from './authRedux';
import { combineReducers } from 'redux';

export const store = configureStore({
   reducer: {
      cart: cartReducer,
      auth: authReducer,
   },
});

const rootReducer = combineReducers({ cart: cartReducer, auth: authReducer });

//Used to type state when we are using useSelector
export type IRootState = ReturnType<typeof rootReducer>;
