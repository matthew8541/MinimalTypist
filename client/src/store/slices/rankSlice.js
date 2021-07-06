import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogin: false,
  username: null,
  email: null,
}

const rankSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    fetchRanking() {

    },
    updateRanking() {

    }
  },
})

export const {
  fetchRanking,
  updateRanking
} = rankSlice.actions

export default rankSlice.reducer