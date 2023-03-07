import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './slices/categoryItem'
import productsReducer from './slices/productItem'
import isLoginReducer from './slices/isLogin'

const rootReducer = {
    categories: categoryReducer,
    products: productsReducer,
    isLogin: isLoginReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store;