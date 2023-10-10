import { useMemo, useState } from "react";
import { Review } from "types/Review";

export function useReviews() {
    const [reviews, setReviews] = useState<Review[]>([]);

    useMemo(() => {
            const apiUrl = "https://localhost:7175/Review";

            fetch(apiUrl)
            .then((response) => {
                if (!response.ok)
                {
                    throw new Error('An error occured trying to retrieve movies.')
                }

                return response.json();
            })
            .then((data) => {
                setReviews(data);
                setFilteredReviews(data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);

    const [searchText, setSearchText] = useState('');
    const [filteredReviews, setFilteredReviews] = useState<Review[]>(reviews);

    const handleSearch = () => {
        const filtered = reviews.filter((review: Review) =>
        review.movieName.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredReviews(filtered);
    };

    return {
        handleSearch,
        filteredReviews,
        searchText,
        setSearchText
    }
}