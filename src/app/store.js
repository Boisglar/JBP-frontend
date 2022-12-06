import { configureStore } from "@reduxjs/toolkit";
import compareSlice from "../features/compare.slice";
import phoneSlice from "../features/phone.slice";


const store = configureStore({
    reducer: {
        phones: phoneSlice,
        compare: compareSlice
    }
})

export default store