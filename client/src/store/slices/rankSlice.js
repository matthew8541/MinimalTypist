import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ranking: []
}

const rankSlice = createSlice({
  name: 'rank',
  initialState,
  reducers: {
    fetchRanking(state) {

    },
    updateRanking(state) {

    }
  },
})

export const {
  fetchRanking,
  updateRanking
} = rankSlice.actions

export default rankSlice.reducer