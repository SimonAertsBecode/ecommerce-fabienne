import { createSlice } from '@reduxjs/toolkit';

//*Interfaces
import { IUser } from '../utils/interface/interfaces';

const user = localStorage.getItem('user');
const loggedIn = localStorage.getItem('loggedIn');

const authSlice = createSlice({
   name: 'auth',
   initialState: {
      user: (user ? JSON.parse(user) : null) as null | IUser,
      loggedIn: loggedIn ? JSON.parse(loggedIn) : false,
   },
   reducers: {
      login: (state, action) => {
         const { user } = action.payload;
         localStorage.setItem('user', JSON.stringify(user));
         localStorage.setItem('loggedIn', 'true');
         state.user = user;
         state.loggedIn = true;
      },
      logout: (state) => {
         localStorage.removeItem('user');
         localStorage.removeItem('loggedIn');
         state.user = null;
         state.loggedIn = false;
      },
   },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
