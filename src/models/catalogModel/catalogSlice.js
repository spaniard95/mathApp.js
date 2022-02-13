import { createSlice } from "@reduxjs/toolkit";
import { lessons } from "../../library";

const initialState = lessons;

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    gradeInput: (state, action) => {
      const lesson = state.find((x) => x.number == action.payload.num);
      const lessonIndex = state.indexOf(lesson);
      state[lessonIndex].grade = action.payload.grade;
    },
    categoryChange: (state, action) => {
      const lesson = state.find((x) => x.number == action.payload.num);
      const lessonIndex = state.indexOf(lesson);
      state[lessonIndex].selected = action.payload.selected;
    },
    bookMarkChange: (state, action) => {
      const lesson = state.find((x) => x.number == action.payload.num);
      const lessonIndex = state.indexOf(lesson);
      state[lessonIndex].bookMarked = action.payload.bookMarked;
    },
  },
});

export const { gradeInput, categoryChange, bookMarkChange } =
  catalogSlice.actions;

export default catalogSlice.reducer;
