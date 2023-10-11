import { createAsyncThunk } from "@reduxjs/toolkit";
import { AddReview } from "apis/models/addReview";

// Create an asynchronous thunk for saving a review

export const saveReviews = createAsyncThunk("reviews/save", async (review: AddReview) => {
    const response = await fetch("https://localhost:7175/Review", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
    });

    const data = await response.json();

    return data;
});
