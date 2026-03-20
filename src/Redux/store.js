import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import filterReducer from './FilterSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filters: filterReducer,
  },
  devTools: true,
});