import { createSlice } from "@reduxjs/toolkit";

export interface pokeBallState {
  status: string;
}

const initialState: pokeBallState = {
  status: "",
};

export const pokeBallSlice = createSlice({
  name: "pokeBall",
  initialState,
  reducers: {
    setPokeBallStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPokeBallStatus } = pokeBallSlice.actions;

export default pokeBallSlice.reducer;
