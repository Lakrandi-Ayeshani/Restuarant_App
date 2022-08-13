import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
    name: 'Resturant',
    initialState: {
        customerOrder: [],
    },
})
export default restaurantSlice.reducer;