import { createSlice } from '@reduxjs/toolkit'

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

    },
    logout(state) {

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