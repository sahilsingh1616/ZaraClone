import { configureStore } from "@reduxjs/toolkit";
import Counter from '../reducers/CartSlice';

export const store = configureStore({
    reducer: {
     Post:Counter,
    },
  })