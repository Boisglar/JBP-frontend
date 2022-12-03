import { configureStore } from "@reduxjs/toolkit";
import phoneSlice from "../features/phone.slice";

const store = configureStore({
    reducer: phoneSlice
})

export default store