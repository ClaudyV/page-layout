import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: "layout",
  initialState: { value: { showLogo: true } },
  reducers: {
    isShowLogo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {isShowLogo} = layoutSlice.actions

export default layoutSlice.reducer;
