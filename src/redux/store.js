import { configureStore } from '@reduxjs/toolkit'
import likedSlice from './likedSlice'
import CartSlice from './Cart'
export const store = configureStore({
  reducer:{
    liked : likedSlice,
    cart : CartSlice
  }
})
