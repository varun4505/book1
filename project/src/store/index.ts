import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import booksReducer from './slices/booksSlice';
import borrowingsReducer from './slices/borrowingsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: booksReducer,
    borrowings: borrowingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;