import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

//this slice of state was added so we can access the grades more easilly with pairs key/value
//and to be able to tranfer the grades from the old "ΟΔΗΓΟΣ ΣΠΟΥΔΩΝ" to the new one
//so the data doesnt get lost and needs to be re inserted  everytime the user changes the current "ΟΔΗΓOΣ ΣΠΟΥΔΩΝ"
export const gradesSlice = createSlice({
  name: "grades",
  initialState,
  reducers: {
    gradeInput: (state, action) => {
      //if the lessons grade already exists it updates it, if first time, new value/key pair  with lessonsId: grade
      state[action.payload.lessonId] = action.payload.grade;
    },
  },
});

export const { gradeInput } = gradesSlice.actions;

export default gradesSlice.reducer;
