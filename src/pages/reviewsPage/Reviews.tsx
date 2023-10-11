import {
  Container,
  TextField,
  List,
  Typography,
} from '@mui/material';
import { useReviews } from './hooks/useReviews';
import { ReviewCard } from '../../components/reviewCard/ReviewCard';

/**
 * Reviews Component
 *
 * This component is responsible for displaying a list of reviews with a search feature.
 *
 * @returns {JSX.Element} A React JSX element for the reviews page.
 */
export function Reviews(): JSX.Element {
  // Extracting data and functions from the custom hook 'useReviews'
  const {
    filteredReviews,  // An array of reviews after applying search filter
    handleSearch,     // Function to handle the search
    searchText,       // The current search input text
    setSearchText,    // Function to update the search input text
  } = useReviews();

  return (
    <Container style={{ marginTop: "2%" }}>
      {/* Title */}
      <Typography variant="h4" align="center" gutterBottom>
        Reviews
      </Typography>

      {/* Search input field */}
      {filteredReviews && (
        <TextField
          label="Search Movie by Name"
          variant="outlined"
          fullWidth
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          margin="normal"
        />
      )}

        {/* Conditional rendering: Display a message if there are no reviews */}
        {filteredReviews.length <= 0 && (
        <h1>There are currently no reviews to display!</h1>
      )}

      {/* List of reviews */}
      {filteredReviews && (
        <List>
          {filteredReviews.map((review, index) => 
            <ReviewCard key={index} index={index} review={review} />
          )}
        </List>
      )}
    </Container>
  );
};
