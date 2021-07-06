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
    login(state) {
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
      // axios.get('/home');
    },
    logout(state) {
      state.isLogin = false;
    },
    register(state, actions) {

    }
  },
})

export const {
  login,
  logout,
  register
} = authSlice.actions

export default authSlice.reducer