import { useState } from "react";
import { Review } from "types/Review";

export function useReviews() {
    const getReviews = [{movieName: "Life of Pi", reviewText: "Reviewed", rating: 4.5},
    {movieName: "Stardust", reviewText: "Reviewed", rating: 5}];

    const [searchText, setSearchText] = useState('');
    const [filteredReviews, setFilteredReviews] = useState<Review[]>(getReviews);

    const handleSearch = () => {
        const filtered = getReviews.filter((review: Review) =>
        review.movieName.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredReviews(filtered);
    };

    return {
        handleSearch,
        filteredReviews,
        searchText,
        setSearchText,
    }
}