import { createAsyncThunk } from "@reduxjs/toolkit";

// Create an asynchronous thunk for fetching reviews

export const fetchReviews = createAsyncThunk("reviews/get", async () => {
    const response = await fetch("https://localhost:7175/Review", {
        method: 'GET',
    });

    const data = await response.json();

    return data;
});
