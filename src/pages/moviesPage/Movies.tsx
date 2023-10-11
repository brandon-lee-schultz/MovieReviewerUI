// Import necessary components and libraries
import React from 'react';
import {
  Container,
  Grid,
  Typography,
} from '@mui/material'; // Material-UI components
import ReactPaginate from 'react-paginate'; // Pagination component
import './movies.css'; // Custom CSS styles
import { Movie } from '../../components/movie/Movie'; // Movie component
import { useMovies } from './hooks/useMovies'; // Custom hook for handling movies

// Define the Movies component
export function Movies(): JSX.Element {
  // Use the `useMovies` custom hook to get movie data and pagination logic
  const { paginatedMovies, moviesPerPage, handlePageChange, moviesCount } = useMovies();

  return (
    <Container style={{ marginTop: "2%" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Movies
      </Typography>
      <Grid container spacing={2}>
        {paginatedMovies.map((movie, index) => (
          <Movie
            key={index}
            id={movie.id}
            title={movie.title}
            image={movie.coverImage}
            year={movie.releaseYear}
            index={index}
          />
        ))}
      </Grid>
      {/* Pagination component to navigate through movie pages */}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={Math.ceil(moviesCount / moviesPerPage)}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </Container>
  );
}
