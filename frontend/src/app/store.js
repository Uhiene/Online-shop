import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../features/products/slice/productsSlice' 
import cartReducer from "../features/products/slice/cartSlice"
import { productsApi } from '../features/products/api/ProductsApi'


export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
   return  getDefaultMiddleware().concat(productsApi.middleware)
  },



  devTools: process.env.NODE_ENV !== "production",
})

