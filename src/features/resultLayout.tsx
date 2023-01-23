import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: "layout",
  initialState: { value: { showResultPage: false } },
  reducers: {
    setResultPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setResultPage } = layoutSlice.actions;

export default layoutSlice.reducer;
