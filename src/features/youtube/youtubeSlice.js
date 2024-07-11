import { createSlice } from "@reduxjs/toolkit";

export const youtubeSlice = createSlice({
  name: "counter",
  initialState: {
    value: false,
  },
  reducers: {
    playing: (state) => {
      state.value = true;
    },
    pause: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { playing, pause } = youtubeSlice.actions;

export default youtubeSlice.reducer;
