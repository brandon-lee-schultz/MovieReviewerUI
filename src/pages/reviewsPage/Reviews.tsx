import { useState } from 'react';
import {
  Container,
  TextField,
  List,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';

import { useReviews } from './hooks/useReviews';
import { ReviewCard } from '../../components/reviewCard/ReviewCard';

export function Reviews() {
  const {
    handleReviewDelete,
    handleSearch,
    handleDeleteDialogClose,
    deleteDialogOpen,
    filteredReviews,
    searchText,
    setSearchText} = useReviews();

  return (
    <Container style={{marginTop: "2%"}}>
      <Typography variant="h4" align="center" gutterBottom>
        Reviews Page
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