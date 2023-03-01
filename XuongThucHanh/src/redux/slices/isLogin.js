import { createSlice } from '@reduxjs/toolkit'

const isLogin = createSlice({
    initialState: false,
    name: "isLogin",
    reducers: {
        handleLogin: (state, action) => (
            state = action.payload
        )
    }
})

const { actions, reducer } = isLogin;
export const { handleLogin } = actions;
export default reducer;