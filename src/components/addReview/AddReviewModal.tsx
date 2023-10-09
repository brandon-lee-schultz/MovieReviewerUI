// AddReviewModal.tsx
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Slider,
  Button,
  Typography,
} from '@mui/material';

interface AddReviewModalProps {
  open: boolean;
  movieId: string;
  onClose: () => void;
  onSave: (movieId: string, comment: string, rating: number) => void;
}

const AddReviewModal: React.FC<AddReviewModalProps> = ({ open, movieId, onClose, onSave }) => {
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  const handleSave = () => {
    onSave(movieId, comment, rating);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Review</DialogTitle>
      <DialogContent>
        <TextField
          label="Comment"
          fullWidth
          variant="outlined"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Typography gutterBottom>Rating:</Typography>
        <Slider
          value={rating}
          min={0}
          max={5}
          step={0.1}
          onChange={(_, value) => setRating(value as number)}
        />
        <Typography variant="body2">{rating.toFixed(1)}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
        <Button onClick={onClose} variant="outlined" color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddReviewModal;
