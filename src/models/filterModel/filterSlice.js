import { createSlice } from "@reduxjs/toolkit";

//const initialState = new Array(3).fill(false);
const initialState = {
    value: [false, false, false, false, false, false],
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        clicked: (state, action) => {
            state.value[action.payload] = !state.value[action.payload];
        },
    }, 
});

export const {clicked} = filterSlice.actions;

export default filterSlice.reducer;