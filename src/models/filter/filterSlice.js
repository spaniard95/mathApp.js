import { createSlice } from "@reduxjs/toolkit";

//const initialFilterState = new Array(3).fill(false);
const initialFilterState = [false, false, false];

export const filterSlice = createSlice ({
    name: "filter",
    initialFilterState,
    reducers: {
        clicked: (state, action) => {
            state[action.payload] = !state[action.payload];
        },
    }, 
});

export const {clicked} = filterSlice.actions;

export default filterSlice.reducer;