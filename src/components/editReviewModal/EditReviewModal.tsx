// Import necessary components and modules from dependencies and local files
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, Typography, Slider, TextField, FormHelperText } from "@mui/material";
import { useEditReviewModal } from "./hooks/useEditReviewModal";
import EditIcon from '@mui/icons-material/Edit';
import { Review } from "types/Review";
import { useState } from "react";

// Define the props interface for the 'EditReviewModal' component
export interface EditReviewModalProps {
    review: Review;
}

// Define the 'EditReviewModal' component function
export function EditReviewModal(props: EditReviewModalProps): JSX.Element {
    // Initialize state variables for the review data and comment error
    const [review, setReview] = useState<Review>(props.review);
    const [commentError, setCommentError] = useState<string>('');

    // Use the 'useEditReviewModal' custom hook to manage the modal state and edit functionality
    const { editDialogOpen, handleEditDialogClose, handleReviewEdit, handleEdit } = useEditReviewModal(review);

    // Function to handle changes in the comment and rating fields
    const handleChanges = (comment: string | undefined, rating: number | undefined) => {
        // Update the rating if it's different from the current rating
        if (rating !== undefined && rating !== review.rating) {
            setReview({ ...props.review, rating: rating as number });
        }

        // Update the comment if it's different from the current comment
        if (comment !== undefined && comment !== review.comment) {
            // Check the character limit for the comment
            if (comment.length <= 100) {
                setReview({ ...props.review, comment: comment });
                setCommentError(''); // Clear the comment error message
                return;
            }
            setCommentError("You have reached the character limit!");
        }
    }

    return (
        <>
            {/* IconButton for opening the edit modal */}
            <IconButton onClick={() => handleEdit()}>
                <EditIcon />
            </IconButton>

            {/* Edit Review Dialog */}
            <Dialog open={editDialogOpen} onClose={handleEditDialogClose}>
                <DialogTitle>Edit Review</DialogTitle>
                <DialogContent>
                    {/* Text field for editing the comment */}
                    <TextField
                        style={{ marginTop: "2%" }}
                        label="Comment"
                        fullWidth
                        variant="outlined"
                        value={review.comment}
                        onChange={(e) => handleChanges(e.target.value, undefined)}
                    />
                    {/* Display an error message if the comment exceeds the character limit */}
                    {commentError && (<FormHelperText error>{commentError}</FormHelperText>)}
                    <Typography style={{ marginTop: "2%" }} gutterBottom>Rating:</Typography>
                    {/* Slider for rating input */}
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
                    {/* Buttons for canceling and saving the edited review */}
                    <Button onClick={handleEditDialogClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleReviewEdit} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
