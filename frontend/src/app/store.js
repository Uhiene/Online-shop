import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../features/products/slice/productsSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
})

