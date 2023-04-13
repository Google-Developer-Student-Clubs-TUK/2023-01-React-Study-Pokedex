import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface colorState {
  hslValue: number[];
  backgroundColor: string;
}

const initialState: colorState = {
  hslValue: [0, 0, 0],
  backgroundColor: "",
};

export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    setHslValue: (state, action: PayloadAction<number[]>) => {
      state.hslValue = action.payload;
    },
    setBackgroundColor: (state, action: PayloadAction<string>) => {
      state.backgroundColor = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHslValue, setBackgroundColor } = colorSlice.actions;

export default colorSlice.reducer;
