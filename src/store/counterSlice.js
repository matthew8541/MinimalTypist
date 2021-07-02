import { createSlice } from '@reduxjs/toolkit'
import { TIME, START } from "../constants/gameStatus";

const initialState = {
  timer: TIME,
  totalWords: 0,
  correctWords: 0,
  gameStatus: START,
  showResult: false
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    tictok(state) {
      state.timer--;
    },
    resetTimer(state) {
      state.timer = TIME;
    },
    incrementTotalWords(state) {
      state.totalWords++;
    },
    incrementCorrectWords(state) {
      state.correctWords++;
    },
    changeGameStatus(state, actions) {
      console.log(actions)
      state.gameStatus = actions.payload.type;
      console.log("Current Game Status", state.gameStatus);
    },
    setTotalWords(state, actions) {
      state.totalWords = actions.payload.amount;
    },
    changeResultStatus(state) {
      state.showResult = !state.showResult;
    }
  },
})

export const {
  tictok,
  incrementTotalWords,
  incrementCorrectWords,
  changeGameStatus,
  resetTimer,
  setTotalWords
} = counterSlice.actions

export default counterSlice.reducer