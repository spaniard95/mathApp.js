import { createSlice } from "@reduxjs/toolkit";

//const initialState = new Array(6).fill(false); doesnt work,I dont know why
const initialState = {
    value: [true, true, true, true, true, true],
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        clicked: (state, action) => {
            state.value[action.payload] = !state.value[action.payload];
        },
        checkAll: (state) => {
            state.value.fill(true);
        }
    }, 
});

export const {clicked, checkAll} = filterSlice.actions;

export default filterSlice.reducer;