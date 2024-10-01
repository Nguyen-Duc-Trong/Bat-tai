import { configureStore } from '@reduxjs/toolkit';
import { Store } from "@reduxjs/toolkit";
import counterSlice  from './slice/counter';

// Tạo store
const store = configureStore({
    reducer: {
    counter: counterSlice
    },
  });
  
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;