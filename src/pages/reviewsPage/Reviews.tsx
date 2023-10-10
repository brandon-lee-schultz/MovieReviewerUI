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
    handleSearch,
    filteredReviews,
    searchText,
    setSearchText} = useReviews();

  return (
    <Container style={{marginTop: "2%"}}>
      <Typography variant="h4" align="center" gutterBottom>
        Reviews
      </Typography>
      <TextField
        label="Search Movie by Name"
        variant="outlined"
        fullWidth
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        margin="normal"
      />
      <List>
        {filteredReviews.map((review, index) => (
          <ReviewCard key={index} index={index} review={review} />
        ))}
      </List>
    </Container>
  );
};