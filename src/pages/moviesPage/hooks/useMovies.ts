import { useState } from "react";
import { Movie } from "types/Movie";

interface UseMovies {
    paginatedMovies: Movie[], 
    moviesPerPage: number, 
    handlePageChange: (selectedPage: { selected: number }) => void, 
    moviesCount: number 
}

export function useMovies(): UseMovies {
    const moviesPerPage = 6;
    const movies:Movie[] = [
      {
        id: "1",
        title: 'Dirty Dancing: Havana Nights',
        coverImage: 'https://imgs.search.brave.com/Gh9EMYGjjnpO36nKoiBBvil3xRPDP6PThRJH1dqQA-Q/rs:fill:250:250:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMi8yNS9E/aXJ0eV9kYW5jaW5n/X2hhdmFuYV9uaWdo/dHMuanBn',
        releaseYear: 2004,
      },
      {
        id: "2",
        title: 'Life of Pi',
        coverImage: 'https://imgs.search.brave.com/F34bFaAJFsTmr7olZTM1L_P3rt_BJgJLm0Tn-X30gqY/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vNS81Ny9M/aWZlX29mX1BpXzIw/MTJfUG9zdGVyLmpw/Zw',
        releaseYear: 2012,
      },
      {
        id: "3",
        title: 'The Nun',
        coverImage: 'https://imgs.search.brave.com/xXL52lGGwFTlg0nWxMdtN4D03t7hLa6FFJeh9u6EmrI/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMy8zNC9U/aGVOdW5Qb3N0ZXIu/anBn',
        releaseYear: 2018,
      },
      {
        id: "4",
        title: 'Real Steel',
        coverImage: 'https://imgs.search.brave.com/876qvxx9URrYWK31y5pVjCPd-JZYbWDktEofsN5EP-Q/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Mi8yMi9SZWFsX1N0/ZWVsX1Bvc3Rlci5q/cGcvNTEycHgtUmVh/bF9TdGVlbF9Qb3N0/ZXIuanBn',
        releaseYear: 2011,
      },
      {
        id: "5",
        title: 'Stardust',
        coverImage: 'https://imgs.search.brave.com/0ofdgjr3vZiBfVlOwUKo-HcIaeBsAQKVDWxAwnvnbI0/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Ni82Zi9TdGFyZHVz/dF9wcm9tb19wb3N0/ZXIuanBnLzUxMnB4/LVN0YXJkdXN0X3By/b21vX3Bvc3Rlci5q/cGc',
        releaseYear: 2007,
      },
      {
        id: "6",
        title: 'Percy Jackson: The Lightning Thief',
        coverImage: 'https://imgs.search.brave.com/haTlG7IBUZCpd8ilvkw2aVu4u-oqrtiyei91xiY0Cco/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/ZS9lYi9QZXJjeV9K/YWNrc29uXyUyNl90/aGVfT2x5bXBpYW5z/X1RoZV9MaWdodG5p/bmdfVGhpZWZfcG9z/dGVyLmpwZy81MTJw/eC1QZXJjeV9KYWNr/c29uXyUyNl90aGVf/T2x5bXBpYW5zX1Ro/ZV9MaWdodG5pbmdf/VGhpZWZfcG9zdGVy/LmpwZw',
        releaseYear: 2010,
      },
      {
        id: "7",
        title: 'Men In Black',
        coverImage: 'https://imgs.search.brave.com/E954IedlRY3IeZXmAhq2uAJrQcZegxwBlhSruuEhvzM/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Zi9mYi9NZW5faW5f/QmxhY2tfUG9zdGVy/LmpwZy81MTJweC1N/ZW5faW5fQmxhY2tf/UG9zdGVyLmpwZw',
        releaseYear: 1997,
      },
      {
        id: "8",
        title: 'Click',
        coverImage: 'https://imgs.search.brave.com/wltz17z8kWadi-Uct6hmaoXMMwXcgijVWvrUU64wcqw/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Yi9iZC9DbGlja19m/aWxtLmpwZy81MTJw/eC1DbGlja19maWxt/LmpwZw',
        releaseYear: 2006,
      }
    ];
    
    const [currentPage, setCurrentPage] = useState(0);

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