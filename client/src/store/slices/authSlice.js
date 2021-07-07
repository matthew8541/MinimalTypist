import { createSlice } from '@reduxjs/toolkit'
const axios = require("axios");

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
      const {email, password} = actions.payload;
      state.isLogin = true;
      axios.post('/login', {
        firstName: 'test',
        lastName: 'test'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    logout(state) {
      state.isLogin = false;
    },
    register(state, actions) {
      const {username, email, password} = actions.payload;
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