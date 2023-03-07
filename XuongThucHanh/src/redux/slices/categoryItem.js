import { createSlice } from '@reduxjs/toolkit'
import { DATA } from '../../constants/DATA'

const initState = [...DATA]

const categoryItem = createSlice({
    name: 'categoryItem',
    initialState: initState,
    reducers: {
        addCategory: (state, action) => {
            state.push(action.payload);
        }
    }
});

const { reducer, actions } = categoryItem;
export const { addCategory } = actions;
export default reducer;
