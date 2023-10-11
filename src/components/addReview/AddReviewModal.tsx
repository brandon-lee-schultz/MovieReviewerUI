// Import necessary components and modules from dependencies
import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Slider,
  Button,
  Typography,
  FormHelperText,
} from '@mui/material';

// Define the props interface for the 'AddReviewModal' component
interface AddReviewModalProps {
  open: boolean; // A boolean to determine if the modal is open
  movieId: string; // The unique identifier for the movie
  onClose: () => void; // Function to close the modal
  onSave: (movieId: string, comment: string, rating: number) => void; // Function to save the review
}

// Define the 'AddReviewModal' component function
export function AddReviewModal(props: AddReviewModalProps) : JSX.Element {
  // Destructure the props for easier access
  const { open, movieId, onClose, onSave } = props;

  // Initialize state variables for comment, rating, and comment error
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [commentError, setCommentError] = useState<string>('');

  // Function to handle saving the review and closing the modal
  const handleSave = () => {
    onSave(movieId, comment, rating);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Review</DialogTitle>
      <DialogContent>
        {/* Text field for entering the review comment */}
        <TextField
          label="Comment"
          fullWidth
          variant="outlined"
          value={comment}
          onChange={(e) => {
            if (e.target.value.length <= 100) {
              setComment(e.target.value);
              setCommentError('');
              return;
            } else {
              setCommentError("You have reached the character limit!");
            }
          }}
        />
        {/* Display an error message if the comment exceeds the character limit */}
        {commentError && (<FormHelperText error>{commentError}</FormHelperText>)}

        <Typography gutterBottom>Rating:</Typography>
        {/* Slider for selecting the rating */}
        <Slider
          value={rating}
          min={0}
          max={5}
          step={0.1}
          onChange={(_, value) => setRating(value as number)}
        />
        {/* Display the selected rating value */}
        <Typography variant="body2">{rating.toFixed(1)}</Typography>
      </DialogContent>
      <DialogActions>
        {/* Button to save the review and close the modal */}
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
        {/* Button to cancel and close the modal without saving the review */}
        <Button onClick={onClose} variant="outlined" color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}