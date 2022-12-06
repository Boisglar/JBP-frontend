import { configureStore } from "@reduxjs/toolkit";
import compareSlice from "../features/compare.slice";
import phoneSlice from "../features/phone.slice";

const store = configureStore({
    reducer: {
        phone: phoneSlice,
        compare: compareSlice
}})

export default store