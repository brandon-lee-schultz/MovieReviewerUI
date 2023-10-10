import { configureStore } from "@reduxjs/toolkit";
import { ReviewReducer } from "./features/reviewSlice";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";

export const Store = configureStore({
    reducer: {
        reviewSlice: ReviewReducer
    }
})

export type RootState = ReturnType<typeof Store.getState>;

export const useAppDispatch = () => useDispatch<typeof Store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;