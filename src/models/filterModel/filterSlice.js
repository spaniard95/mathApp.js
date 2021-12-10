import { createSlice } from "@reduxjs/toolkit";

//const initialState = new Array(6).fill(false); doesnt work,I dont know why
const initialState2 = {
  categoryF: [true, true, true, true, true, true, true, true, true],
};

const initialState = [
  {
    title: "Κατηγορίες Μαθημάτων",
    checks: [true, true, true, true, true, true, true, true, true],
  },
  {
    title: "Επιλογές μαθημάτων",
    checks: [false, false],
  },
];

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    clicked: (state, action) => {
      console.log(action);
      state[action.payload.filterIndex].checks[action.payload.checkIndex] =
        !state[action.payload.filterIndex].checks[action.payload.checkIndex];
    },
    checkAll: (state) => {
      state.categoryF.fill(true);
    },
  },
});

export const { clicked, checkAll } = filterSlice.actions;

export default filterSlice.reducer;
