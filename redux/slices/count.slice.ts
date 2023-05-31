import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CountState = {
  count: number;
};

const initialState: CountState = {
  count: 0,
};

const countSlice = createSlice({
  name: "countSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
  },
});

export const { increment, incrementByAmount } = countSlice.actions;

export default countSlice;
