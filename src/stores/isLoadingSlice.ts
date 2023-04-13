import { createSlice } from "@reduxjs/toolkit";

export interface isLoadingState {
  status: boolean;
}

const initialState: isLoadingState = {
  status: false,
};

export const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.status = true;
    },
    setIsLoaded: (state) => {
      state.status = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsLoading, setIsLoaded } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
