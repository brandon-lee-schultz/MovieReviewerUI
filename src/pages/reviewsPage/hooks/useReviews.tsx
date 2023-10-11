import { useEffect, useState } from "react";
import { fetchReviews } from "store/features/fetchReviews";
import { useAppDispatch, useAppSelector } from "store/store";
import { Review } from "types/Review";

/**
 * Custom React hook for managing and filtering a list of reviews.
 * This hook fetches the initial list of reviews and provides filtering functionality.
 * @returns {object} An object containing methods and state variables.
 */
export function useReviews() {
    // Retrieve the list of reviews from the Redux store.
    const reviews = useAppSelector(state => state.reviewSlice.reviews);

    // Access the Redux store's dispatch function.
    const dispatch = useAppDispatch();

    // Fetch reviews when the component mounts.
    useEffect(() => {
        dispatch(fetchReviews());
    }, []);

    // State variables for search functionality.
    const [searchText, setSearchText] = useState('');
    const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);

    /**
     * Filter the list of reviews based on the search text.
     * Updates the `filteredReviews` state variable accordingly.
     */
    const handleSearch = () => {
        const filtered = reviews.filter((review: Review) =>
            review.movieName.toLowerCase().includes(searchText.toLowerCase())
        );

        if (filtered == null) {
            setFilteredReviews([]);
            return;
        }

        setFilteredReviews(filtered);
    };

    /**
     * Return an object with methods and state variables for external use.
     */
    return {
        handleSearch,               // Method for filtering reviews.
        filteredReviews: filteredReviews.length <= 0 ? reviews : filteredReviews, // Filtered list of reviews.
        searchText,                 // Current search text.
        setSearchText                // Function to update the search text.
    };
}
