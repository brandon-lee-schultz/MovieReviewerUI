import { createAsyncThunk } from "@reduxjs/toolkit";

// Create an asynchronous thunk for deleting a review

export const deleteReview = createAsyncThunk("reviews/delete", async (id: string) => {
    const response = await fetch("https://localhost:7175/Review", {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id),
    });

    const data = await response.json();

    return data;
});
