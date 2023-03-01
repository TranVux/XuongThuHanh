import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './slices/categoryItem'
import productsReducer from './slices/productItem'

const rootReducer = {
    categories: categoryReducer,
    products: productsReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store;