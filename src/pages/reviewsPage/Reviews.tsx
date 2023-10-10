import {
  Container,
  TextField,
  List,
  Typography,
} from '@mui/material';
import { useReviews } from './hooks/useReviews';
import { ReviewCard } from '../../components/reviewCard/ReviewCard';

export function Reviews() {
  
  const {
    filteredReviews,
    handleSearch,
    searchText,
    setSearchText} = useReviews();

  return (
    <Container style={{marginTop: "2%"}}>
      <Typography variant="h4" align="center" gutterBottom>
        Reviews
      </Typography>
      {filteredReviews.length <= 0 && (
          <h1>There are currently no reviews to display!</h1>
        ) }
      {filteredReviews && (
        <TextField
        label="Search Movie by Name"
        variant="outlined"
        fullWidth
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        margin="normal"
      />
      ) && (
        <List>
        {filteredReviews.map((review, index) => (
          <ReviewCard key={index} index={index} review={review} />
        ))}
      </List>
      )}
    </Container>
  );
};