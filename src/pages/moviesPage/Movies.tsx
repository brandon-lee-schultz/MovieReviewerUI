import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import ReactPaginate from 'react-paginate';
import './Movies.css';
import { Movie } from '../../components/movie/Movie';


const moviesPerPage = 6; // Number of movies to display per page

const movies = [
  {
    title: 'Dirty Dancing: Havana Nights',
    image: 'https://imgs.search.brave.com/Gh9EMYGjjnpO36nKoiBBvil3xRPDP6PThRJH1dqQA-Q/rs:fill:250:250:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMi8yNS9E/aXJ0eV9kYW5jaW5n/X2hhdmFuYV9uaWdo/dHMuanBn',
    year: 2004,
  },
  {
    title: 'Life of Pi',
    image: 'https://imgs.search.brave.com/F34bFaAJFsTmr7olZTM1L_P3rt_BJgJLm0Tn-X30gqY/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vNS81Ny9M/aWZlX29mX1BpXzIw/MTJfUG9zdGVyLmpw/Zw',
    year: 2012,
  },
  {
    title: 'The Nun',
    image: 'https://imgs.search.brave.com/xXL52lGGwFTlg0nWxMdtN4D03t7hLa6FFJeh9u6EmrI/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMy8zNC9U/aGVOdW5Qb3N0ZXIu/anBn',
    year: 2018,
  },
  {
    title: 'Real Steel',
    image: 'https://imgs.search.brave.com/876qvxx9URrYWK31y5pVjCPd-JZYbWDktEofsN5EP-Q/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Mi8yMi9SZWFsX1N0/ZWVsX1Bvc3Rlci5q/cGcvNTEycHgtUmVh/bF9TdGVlbF9Qb3N0/ZXIuanBn',
    year: 2011,
  },
  {
    title: 'Stardust',
    image: 'https://imgs.search.brave.com/0ofdgjr3vZiBfVlOwUKo-HcIaeBsAQKVDWxAwnvnbI0/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Ni82Zi9TdGFyZHVz/dF9wcm9tb19wb3N0/ZXIuanBnLzUxMnB4/LVN0YXJkdXN0X3By/b21vX3Bvc3Rlci5q/cGc',
    year: 2007,
  },
  {
    title: 'Percy Jackson: The Lightning Thief',
    image: 'https://imgs.search.brave.com/haTlG7IBUZCpd8ilvkw2aVu4u-oqrtiyei91xiY0Cco/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/ZS9lYi9QZXJjeV9K/YWNrc29uXyUyNl90/aGVfT2x5bXBpYW5z/X1RoZV9MaWdodG5p/bmdfVGhpZWZfcG9z/dGVyLmpwZy81MTJw/eC1QZXJjeV9KYWNr/c29uXyUyNl90aGVf/T2x5bXBpYW5zX1Ro/ZV9MaWdodG5pbmdf/VGhpZWZfcG9zdGVy/LmpwZw',
    year: 2010,
  },
  {
    title: 'Men In Black',
    image: 'https://imgs.search.brave.com/E954IedlRY3IeZXmAhq2uAJrQcZegxwBlhSruuEhvzM/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Zi9mYi9NZW5faW5f/QmxhY2tfUG9zdGVy/LmpwZy81MTJweC1N/ZW5faW5fQmxhY2tf/UG9zdGVyLmpwZw',
    year: 1997,
  },
  {
    title: 'Click',
    image: 'https://imgs.search.brave.com/wltz17z8kWadi-Uct6hmaoXMMwXcgijVWvrUU64wcqw/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Yi9iZC9DbGlja19m/aWxtLmpwZy81MTJw/eC1DbGlja19maWxt/LmpwZw',
    year: 2006,
  }
];

export function Movies() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  const offset = currentPage * moviesPerPage;
  const paginatedMovies = movies.slice(offset, offset + moviesPerPage);

  return (
    <Container style={{marginTop: "2%"}}>
      <Typography variant="h4" align="center" gutterBottom>
        Movies
      </Typography>
      <Grid container spacing={2}>
        {paginatedMovies.map((movie, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
           <Movie 
           title={movie.title}
           image={movie.image}
           year={movie.year} />
          </Grid>
        ))}
      </Grid>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={Math.ceil(movies.length / moviesPerPage)}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </Container>
  );
};