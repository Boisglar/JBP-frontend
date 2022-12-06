import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const compareState = {
    products: [],
    error: null,
    loading: false
}

export const addCompare = createAsyncThunk(
    'compare/post',
    async ({productId, amount}, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:4000/compare', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productId,
                    amount
                })
            })
            const compare = await res.json()
            if (compare.error) {
                return thunkAPI.rejectWithValue(compare.error)
            }
            return thunkAPI.fulfillWithValue(compare)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message) 

        }
    }
)

export const getCompare = createAsyncThunk(
    'compare/get',
    async (data, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:4000/compare')
            const compare = await res.json()
            if (compare.error) {
                return thunkAPI.rejectWithValue(compare.error)
            }
            return thunkAPI.fulfillWithValue(compare)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const deleteCompare = createAsyncThunk(
    'compare/delete',
    async (id, thunkAPI) => {
        try {
            const res = await fetch(`http://localhost:4000/compare/${id}`)
            const compare = await res.json()
            if (compare.error) {
                return thunkAPI.rejectWithValue(compare.error)
            }
            return thunkAPI.fulfillWithValue(compare)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const compareSlice = createSlice({
    name: 'compare',
    compareState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCompare.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(getCompare.rejected, (state, action) =>{
                state.error = action.payload
                state.loading = false
            })
            .addCase(getCompare.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload
            })
            .addCase(addCompare.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(addCompare.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(addCompare.fulfilled, (state, action) => {
                state.loading = false
                state.products.push(action.payload)
            })
            .addCase(deleteCompare.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(deleteCompare.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(deleteCompare.fulfilled, (state, action) => {
                state.loading = false
                state.productId = state.products.filter((item) => {
                    if (item._id === action.payload) {
                        return false
                    }
                    return item
                })
            })
    }
})

export default compareSlice.reducer

