import {
  Container,
  Grid,
  Typography,
} from '@mui/material';
import ReactPaginate from 'react-paginate';
import './movies.css';
import { Movie } from '../../components/movie/Movie';
import { useMovies } from './hooks/useMovies';

export function Movies() {
  
  const { paginatedMovies, moviesPerPage, handlePageChange, moviesCount } = useMovies();

  return (
    <Container style={{marginTop: "2%"}}>
      <Typography variant="h4" align="center" gutterBottom>
        Movies
      </Typography>
      <Grid container spacing={2}>
        {paginatedMovies.map((movie, index) => (
           <Movie
           key={index}
           title={movie.title}
           image={movie.coverImage}
           year={movie.releaseYear} 
           index={index}/>
        ))}
      </Grid>
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
};