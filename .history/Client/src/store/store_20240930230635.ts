import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counter'; // Import reducer từ slice

// Tạo store
const store = configureStore({
  reducer: {
    counter: counterReducer, // Gán reducer cho slice counter
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
