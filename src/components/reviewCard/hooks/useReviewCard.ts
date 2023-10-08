import { Review } from "types/Review";
import { useState } from "react";

interface UseReviewCard {
handleDelete: (review: Review) => void

}

export function useReviewCard(): UseReviewCard {
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const handleDelete = (review: Review) => {
        // setSelectedReview(review);
        // setDeleteDialogOpen(true);
    };

    return {
        handleDelete
    }
}