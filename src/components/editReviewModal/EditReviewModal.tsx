import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, Typography, Slider, TextField } from "@mui/material";
import { useEditReviewModal } from "./hooks/useEditReviewModal";
import EditIcon from '@mui/icons-material/Edit';
import { Review } from "types/Review";
import { useState } from "react";

interface EditReviewModalProps {
    review: Review
}

export function EditReviewModal(props: EditReviewModalProps) {
    const [comment, setComment] = useState<string>(props.review.comment);
    const [rating, setRating] = useState<number>(props.review.rating);

    const { editDialogOpen, handleEditDialogClose, handleReviewEdit, handleEdit } = useEditReviewModal();

    return (<>
    <IconButton onClick={() => handleEdit()}>
        <EditIcon />
    </IconButton>

     <Dialog open={editDialogOpen} onClose={handleEditDialogClose}>
        <DialogTitle>Edit Review</DialogTitle>
        <DialogContent>
        <TextField
          style={{marginTop: "2%"}}
          label="Comment"
          fullWidth
          variant="outlined"
          value={comment}
          onChange={(e) => setComment(e.target.value)}/>
        <Typography 
          style={{marginTop: "2%"}}
          gutterBottom>Rating:</Typography>
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
          <Button onClick={handleEditDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleReviewEdit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      </>)
}