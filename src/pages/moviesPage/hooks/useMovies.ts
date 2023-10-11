// Import necessary dependencies and configurations
import { apiUrl } from "config"; // Import the API base URL from the configuration
import { useEffect, useState } from "react"; // Import React hooks
import { ControllerTypes } from "types/ControllerTypes"; // Import controller types
import { Movie } from "types/Movie"; // Import the Movie type

// Define the structure of the data returned by the hook
interface UseMovies {
    paginatedMovies: Movie[], // An array of movies for the current page
    moviesPerPage: number, // Number of movies to display per page
    handlePageChange: (selectedPage: { selected: number }) => void, // Function to handle page changes
    moviesCount: number // Total number of movies
}

// Define a constant for the number of movies to display per page
const MOVIES_PER_PAGE = 6;

// Create and export the custom hook for managing movies
export function useMovies(): UseMovies {
  // State variables for managing movies and the current page
  const [movies, setMovies] = useState<Movie[]>([]); // Movies data
  const [currentPage, setCurrentPage] = useState(0); // Current page

  // Fetch movies data from the API when the component mounts or updates
  useEffect(() => {
    // Define an asynchronous function for fetching movies
    const fetchMovies = async () => {
      try {
        // Send a request to the API to retrieve movies
        const response = await fetch(`${apiUrl}${ControllerTypes.Movie}`);

        // Check if the response is successful (status code 200)
        if (!response.ok) {
          throw new Error("An error occurred while trying to retrieve movies.");
        }

        // Parse the response data as JSON and set it in the state
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        // Handle any errors that occur during the fetch process
        console.log(error);
      }
    };

    // Call the fetchMovies function when the component mounts or updates
    fetchMovies();
  }, []); // The empty dependency array ensures this effect runs once on mount

  // Define a function for handling page changes
  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  // Calculate the starting index for the current page
  const offset = currentPage * MOVIES_PER_PAGE;

  // Create an array of movies to display on the current page
  const paginatedMovies = movies.slice(offset, offset + MOVIES_PER_PAGE);

  // Get the total number of movies in the dataset
  const moviesCount = movies.length;

  // Return the data required by the component using this hook
  return {
    paginatedMovies,
    moviesPerPage: MOVIES_PER_PAGE,
    handlePageChange,
    moviesCount,
  };
}
