import { createSlice } from "@reduxjs/toolkit";
import lessons from "../../components/catalog/LessonCatalog";

const initialState = lessons;

export const catalogSlice = createSlice({
    name: "catalog",
    initialState,
    reducers: {
        gradeInput: (state, action) => {
            const lesson = state.find(x => x.number == action.payload.num)
            const lessonIndex = state.indexOf(lesson)
            state[lessonIndex].grade = action.payload.grade; 
            console.log(lessonIndex)
        },
    }, 
});

export const {gradeInput} = catalogSlice.actions;

export default catalogSlice.reducer;