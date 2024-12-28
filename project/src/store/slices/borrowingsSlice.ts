import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { BorrowingRecord } from '../../types';

interface BorrowingsState {
  borrowings: BorrowingRecord[];
  loading: boolean;
  error: string | null;
}

const initialState: BorrowingsState = {
  borrowings: [],
  loading: false,
  error: null,
};

const borrowingsSlice = createSlice({
  name: 'borrowings',
  initialState,
  reducers: {
    setBorrowings: (state, action: PayloadAction<BorrowingRecord[]>) => {
      state.borrowings = action.payload;
      state.error = null;
    },
    addBorrowing: (state, action: PayloadAction<BorrowingRecord>) => {
      state.borrowings.push(action.payload);
    },
    updateBorrowing: (state, action: PayloadAction<BorrowingRecord>) => {
      const index = state.borrowings.findIndex(
        (record) => record.id === action.payload.id
      );
      if (index !== -1) {
        state.borrowings[index] = action.payload;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setBorrowings,
  addBorrowing,
  updateBorrowing,
  setLoading,
  setError,
} = borrowingsSlice.actions;
export default borrowingsSlice.reducer;