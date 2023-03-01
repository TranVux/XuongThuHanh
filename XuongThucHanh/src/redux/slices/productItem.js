import { createSlice } from "@reduxjs/toolkit";
import { ProductList } from '../../constants/DATA'


const products = createSlice({
    name: "products",
    initialState: [...ProductList],
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        }
    }
})

const { reducer, actions } = products;
export const { addProduct } = actions;
export default reducer;