// Import necessary modules and components from Redux Toolkit and react-redux
import { configureStore } from "@reduxjs/toolkit";
import { ReviewReducer } from "./features/reviewSlice";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";

// Configure the Redux store using Redux Toolkit
export const Store = configureStore({
  reducer: {
    reviewSlice: ReviewReducer, // Assign the reviewSlice reducer to the store
  },
});

// Define the RootState type, which represents the entire state of the Redux store
export type RootState = ReturnType<typeof Store.getState>;

// Define a custom hook 'useAppDispatch' to access the dispatch function from the store
export const useAppDispatch = () => useDispatch<typeof Store.dispatch>();

// Define a custom hook 'useAppSelector' to select data from the Redux store's state
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
