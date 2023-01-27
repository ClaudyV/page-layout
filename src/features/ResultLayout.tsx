import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface ShowResultState {
  value: boolean
}

// Define the initial state using that type
const initialState : ShowResultState = {
  value: false
}

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setResultPage: (state : ShowResultState, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setResultPage } = layoutSlice.actions;

export default layoutSlice.reducer;
