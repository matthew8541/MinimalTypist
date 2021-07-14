import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: "",
  isLogin: false,
  username: null,
  email: null,
  record: []
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      const { _id } = action.payload;
      state.id = _id;
      state.isLogin = true;
      localStorage.setItem('profile', _id);
    },
    logout(state) {
      state.id = "";
      state.isLogin = false;
      state.username = null;
      state.email = null;
      state.record = []
      localStorage.clear();
    },
    register(state, action) {
      const { username, email } = action.payload;
      state.username = username;
      state.email = email;
      state.isLogin = true;
    },
    setProfile(state, action) {
      const { currUser, profile } = action.payload;
      const { email, username, _id } = currUser;
      const { record } = profile;
      state.id = _id;
      state.username = username;
      state.email = email;
      state.record = record;
    },
    newRecord(state, action) {
      const { wpm, accuracy, date } = action.payload;
      state.record.unshift({ wpm, accuracy, date });
    }
  }
})

export const {
  login,
  logout,
  register,
  setProfile,
  newRecord
} = authSlice.actions

export default authSlice.reducer