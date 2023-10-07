import React, { useState } from 'react';
import {
  Container,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Review } from '../../types/Review';

export function Reviews() {
  const [searchText, setSearchText] = useState('');
  const [reviews, setReviews] = useState<Review[]>([
    {movieName: "Life of Pi", reviewText: "Reviewed", rating: 4.5}, 
    {movieName: "Stardust", reviewText: "Reviewed", rating: 5}]); // Replace with actual review data
  const [selectedReview, setSelectedReview] = useState<Review>();
  const [filteredReviews, setFilteredReviews] = useState<Review[]>(reviews);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleSearch = () => {
    const filtered = reviews.filter((review) =>
      review.movieName.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredReviews(filtered);
  };

  const handleEdit = (review: Review) => {
    setSelectedReview(review);
    setEditDialogOpen(true);
  };

  const handleDelete = (review: Review) => {
    setSelectedReview(review);
    setDeleteDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setSelectedReview(undefined);
    setEditDialogOpen(false);
  };

  const handleDeleteDialogClose = () => {
    setSelectedReview(undefined);
    setDeleteDialogOpen(false);
  };

  const handleReviewEdit = () => {
    // Implement review edit logic here
    handleEditDialogClose();
  };

  const handleReviewDelete = () => {
    // Implement review delete logic here
    handleDeleteDialogClose();
  };

  return (
    <Container  style={{marginTop: "2%"}}>
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
          <ListItem key={index}>
            <ListItemText primary={review.movieName} secondary={review.reviewText} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => handleEdit(review)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleDelete(review)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      {/* Edit Review Dialog */}
      <Dialog open={editDialogOpen} onClose={handleEditDialogClose}>
        <DialogTitle>Edit Review</DialogTitle>
        <DialogContent>
          {/* Edit review form fields */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleReviewEdit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      {/* Delete Review Dialog */}
      <Dialog open={deleteDialogOpen} onClose={handleDeleteDialogClose}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this review?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleReviewDelete} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};