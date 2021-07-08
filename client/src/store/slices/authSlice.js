import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  username: null,
  email: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
    register(state, actions) {
      const { username, email } = actions.payload;
      state.username = username;
      state.email = email;
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