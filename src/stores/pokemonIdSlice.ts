import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface pokemonIdState {
  id: number;
}

const initialState: pokemonIdState = {
  id: 1,
};

export const pokemonIdSlice = createSlice({
  name: "pokemonId",
  initialState,
  reducers: {
    increment: (state) => {
      state.id += 1;
    },
    decrement: (state) => {
      if (state.id <= 1) return;
      state.id -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.id += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  pokemonIdSlice.actions;

export default pokemonIdSlice.reducer;
