import { createSlice } from '@reduxjs/toolkit';

//*Interfaces
import { IUser } from '../utils/interface/interfaces';

const authSlice = createSlice({
   name: 'auth',
   initialState: {
      user: null as IUser | null,
      loggedIn: false,
      loggedOut: true,
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
