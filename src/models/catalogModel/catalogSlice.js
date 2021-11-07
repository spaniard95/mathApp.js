import { createSlice } from "@reduxjs/toolkit";
import { lessons } from "../../library";

const initialState = lessons;

export const catalogSlice = createSlice({
    name: "catalog",
    initialState,
    reducers: {
        gradeInput: (state, action) => {
            const lesson = state.find(x => x.number == action.payload.num)
            const lessonIndex = state.indexOf(lesson)
            state[lessonIndex].grade = action.payload.grade; 
        },
        categoryChange: (state, action) => {
            const lesson = state.find(x => x.number == action.payload.num)
            const lessonIndex = state.indexOf(lesson);
            state[lessonIndex].selected = action.payload.selected;
        },
    }, 
});

export const {gradeInput, categoryChange} = catalogSlice.actions;

export default catalogSlice.reducer;