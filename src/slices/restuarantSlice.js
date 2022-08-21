import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
    name: 'Resturant',
    initialState: {
        customerOrder: [],
        chefState: []
    },
    reducers: {

       addNewCart : (state,{payload}) => {
        state.customerOrder.push(payload);
        console.log(payload)
       },
       addChefMenu : (state, {payload}) => {
        state.chefState.push(payload);
        console.log(payload);
       }
    }
})

export const {addNewCart, addChefMenu} = restaurantSlice.actions;

export default restaurantSlice.reducer;