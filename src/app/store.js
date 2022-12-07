import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart.slice";
import compareSlice from "../features/compare.slice";
import phoneSlice from "../features/phone.slice";


const store = configureStore({
    reducer: {
        phones: phoneSlice,
        compare: compareSlice,
        cart: cartSlice
    }
})

export default store