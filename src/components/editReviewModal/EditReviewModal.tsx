import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, Typography, Slider, TextField, FormHelperText } from "@mui/material";
import { useEditReviewModal } from "./hooks/useEditReviewModal";
import EditIcon from '@mui/icons-material/Edit';
import { Review } from "types/Review";
import { useCallback, useState } from "react";

export interface EditReviewModalProps {
    review: Review
}

export function EditReviewModal(props: EditReviewModalProps) {
    const [review, setReview] = useState<Review>(props.review);
    const [commentError, setCommentError] = useState<string>('');

    const { editDialogOpen, handleEditDialogClose, handleReviewEdit, handleEdit } = useEditReviewModal(review);

    const handleChanges = (comment: string | undefined, rating: number | undefined) => {
        if (rating !== undefined)
        {
            setReview({...props.review, rating: rating as number})
        }
        if (comment !== undefined)
        {
            if (comment.length <= 100)
            {
                setReview({...props.review, comment: comment});
                setCommentError('');
                return;
            }
            setCommentError("You have reached the character limit!");
        }
    }
    
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
          value={review.comment}
          onChange={(e) => handleChanges(e.target.value, undefined)}/>
          {commentError && (<FormHelperText error>{commentError}</FormHelperText>)}
        <Typography 
          style={{marginTop: "2%"}}
          gutterBottom>Rating:</Typography>
        <Slider
          value={review.rating}
          min={0}
          max={5}
          step={0.1}
          onChange={(_, value) => handleChanges(undefined, value as number)}
        />
        <Typography variant="body2">{review.rating.toFixed(1)}</Typography>
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