// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import { employeesApi } from "./features/employeesApi";

export const store = configureStore({
  reducer: {
    [employeesApi.reducerPath]: employeesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeesApi.middleware),
});
