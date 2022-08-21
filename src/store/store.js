import { configureStore } from "@reduxjs/toolkit";
import restuarantSlice from "../slices/restuarantSlice";

export default configureStore({
    reducer: {
        customerOrder : restuarantSlice,
    },
})