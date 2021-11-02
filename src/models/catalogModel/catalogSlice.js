import { createSlice } from "@reduxjs/toolkit";
import lessons from "../../components/catalog/LessonCatalog";

const initialState = lessons;

export const catalogSlice = createSlice({
    name: "catalog",
    initialState,
    reducers: {
        gradeInput: (state, action) => {
            state[0].grade = 8; 
        },
    }, 
});

export const {gradeInput} = catalogSlice.actions;

export default catalogSlice.reducer;