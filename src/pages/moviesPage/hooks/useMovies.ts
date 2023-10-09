import { useMemo, useState } from "react";
import { Movie } from "types/Movie";

interface UseMovies {
    paginatedMovies: Movie[], 
    moviesPerPage: number, 
    handlePageChange: (selectedPage: { selected: number }) => void, 
    moviesCount: number 
}

export function useMovies(): UseMovies {
    const moviesPerPage = 6;
    const [movies, setMovies] = useState<Movie[]>([]);
    const [currentPage, setCurrentPage] = useState(0);

    useMemo(() => {
        const apiUrl = "https://localhost:7175/Movie";

        fetch(apiUrl)
        .then((response) => {
            if (!response.ok)
            {
                throw new Error('An error occured trying to retrieve movies.')
            }

            return response.json();
        })
        .then((data) => {
            setMovies(data);
        })
        .catch((err) => {
            console.log(err)
        })
    }, []);


    const handlePageChange = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected);
    };

    const offset = currentPage * moviesPerPage;
    const paginatedMovies = movies.slice(offset, offset + moviesPerPage);

    const moviesCount = movies.length;

    return {
        paginatedMovies, 
        moviesPerPage, 
        handlePageChange,
        moviesCount
    }
}