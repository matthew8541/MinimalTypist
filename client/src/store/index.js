import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './slices/counterSlice';
import authReducer from './slices/authSlice';
import rankReducer from './slices/rankSlice';

const store = configureStore({
  reducer: { 
    counter: counterReducer,
    auth: authReducer,
    rank: rankReducer
  },
});

export default store;
