import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    error: null,
    loading: false,
    active: false,
}

export const addCompare = createAsyncThunk(
    'compare/post',
    async (product, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:4000/compare', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    product
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
    async (productId, thunkAPI) => {
        try {
            const res = await fetch(`http://localhost:4000/compare/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({productId})
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

const compareSlice = createSlice({
    name: 'compare',
    initialState,
    reducers: {
        compareState(state, action) {
            state.active = !state.active
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCompare.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(getCompare.rejected, (state, action) => {
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
                state.products = state.products.filter((item) => item._id !== action.payload._id)
            })
    }
})


export const { compareState } = compareSlice.actions;

export default compareSlice.reducer

