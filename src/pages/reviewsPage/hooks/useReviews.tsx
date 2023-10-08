import { useState } from "react";
import { Review } from "types/Review";

export function useReviews() {
    const [searchText, setSearchText] = useState('');
    const [reviews, setReviews] = useState<Review[]>([
        {movieName: "Life of Pi", reviewText: "Reviewed", rating: 4.5}, 
        {movieName: "Stardust", reviewText: "Reviewed", rating: 5}]); 
    const [filteredReviews, setFilteredReviews] = useState<Review[]>(reviews);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    const handleSearch = () => {
        const filtered = reviews.filter((review: Review) =>
        review.movieName.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredReviews(filtered);
    };

    const handleDeleteDialogClose = () => {
        setDeleteDialogOpen(false);
    };

 
    const handleReviewDelete = () => {
        // Implement review delete logic here
        handleDeleteDialogClose();
    };

    return {
        handleReviewDelete,
        handleSearch,
        handleDeleteDialogClose,
        deleteDialogOpen,
        filteredReviews,
        searchText,
        setSearchText,
    }
}