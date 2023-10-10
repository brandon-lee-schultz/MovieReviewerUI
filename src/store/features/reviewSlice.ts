import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddReview } from "apis/models/addReview";
import { Review } from "types/Review";

interface ReviewState {
    reviews: Review[]
}

const initialState: ReviewState = {
    reviews: []   
}

export const fetchReviews = createAsyncThunk("reviews/get",  async () => {
    const response = await fetch("https://localhost:7175/Review", {
        method: 'GET'
    });

    const data = await response.json();

    return data;
});

export const saveReviews = createAsyncThunk("reviews/save", async (review: AddReview) => {
    const response = await fetch("https://localhost:7175/Review", {
        method: 'POST',
        headers:
        {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    })

    const data = await response.json();

    return data;
});

export const deleteReview = createAsyncThunk("reviews/delete", async (id: string) => {
    const response = await fetch("https://localhost:7175/Review", {
        method: 'DELETE',
        headers:
        {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(id)
    })

    const data = await response.json();

    return data;
});

export const ReviewSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(fetchReviews.fulfilled, (state, action) => {
            state.reviews =  action.payload;
        });
    }
});

export const ReviewReducer = ReviewSlice.reducer;