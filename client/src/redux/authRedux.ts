import { createSlice } from '@reduxjs/toolkit';

//*Interfaces
import { IUser } from '../utils/interface/interfaces';

const user = localStorage.getItem('user');
const loggedIn = localStorage.getItem('loggedIn');
const loggedOut = localStorage.getItem('loggedOut');

const authSlice = createSlice({
   name: 'auth',
   initialState: {
      user: user ? JSON.parse(user) : null,
      loggedIn: loggedIn ? JSON.parse(loggedIn) : false,
      loggedOut: loggedOut ? JSON.parse(loggedOut) : false,
   },
   reducers: {
      login: (state, action) => {
         state.user = action.payload.user;
         state.user ? (state.loggedIn = true) : (state.loggedIn = false);
      },
      logout: (state) => {
         state.user = null;
         state.loggedIn = false;
         state.loggedOut = true;
      },
   },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
