import { createSlice } from '@reduxjs/toolkit';
import { loginAction, registerAction } from "../actions/authActions";

const initialState = {
  isLogin: false,
  username: null,
  email: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, actions) {
      // const {email, password} = actions.payload;
      loginAction(actions.payload);
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
    register(state, actions) {
      // const {username, email, password} = actions.payload;
      // console.log(actions.payload)
      registerAction(actions.payload);
      state.isLogin = true;
    }
  },
})

export const {
  login,
  logout,
  register
} = authSlice.actions

export default authSlice.reducer