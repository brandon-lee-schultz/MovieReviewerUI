import { useEffect, useState } from "react";
import { fetchReviews } from "store/features/reviewSlice";
import { useAppDispatch, useAppSelector } from "store/store";
import { Review } from "types/Review";

export function useReviews() {
    const reviews = useAppSelector(state => state.reviewSlice.reviews);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchReviews());
    }, []);

    const [searchText, setSearchText] = useState('');
    const [filteredReviews, setFilteredReviews] = useState<Review[]>([]);

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

    return {
        handleSearch,
        filteredReviews: filteredReviews.length <= 0 ? reviews : filteredReviews,
        searchText,
        setSearchText
    }
}