import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: "",
  isLogin: false,
  username: null,
  email: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, actions) {
      const { _id } = actions.payload;
      state.id = _id;
      state.isLogin = true;
    },
    logout(state) {
      state.id = "";
      state.isLogin = false;
      state.username = null;
      state.email = null;
    },
    register(state, actions) {
      const { username, email } = actions.payload;
      state.username = username;
      state.email = email;
      state.isLogin = true;
    },
    setProfile(state, actions) {
      console.log(actions.payload)
      const { username, email, _id } = actions.payload;
      state.id = _id;
      state.username = username;
      state.email = email;
    }
  },
})

export const {
  login,
  logout,
  register,
  setProfile
} = authSlice.actions

export default authSlice.reducer