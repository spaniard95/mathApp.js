import { createSlice } from "@reduxjs/toolkit";

//const initialState = new Array(6).fill(false); doesnt work,I dont know why
const initialState = {
  categoryF: [true, true, true, true, true, true, true, true, true],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    clicked: (state, action) => {
      state.categoryF[action.payload] = !state.categoryF[action.payload];
    },
    checkAll: (state) => {
      state.categoryF.fill(true);
    },
  },
});

export const { clicked, checkAll } = filterSlice.actions;

export default filterSlice.reducer;
