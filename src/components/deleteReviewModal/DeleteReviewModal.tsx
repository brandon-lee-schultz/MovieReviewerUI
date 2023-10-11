// Import necessary components and modules from dependencies and local files
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteReviewModal } from "./hooks/useDeleteReviewModal";

// Define the props interface for the 'DeleteReviewModal' component
interface DeletReviewModalProps {
    id: string;
}

// Define the 'DeleteReviewModal' component function
export function DeleteReviewModal(props: DeletReviewModalProps): JSX.Element {
    // Use the 'useDeleteReviewModal' custom hook to manage the delete dialog state and functionality
    const {
        deleteDialogOpen, // Boolean to track the delete dialog open/close state
        handleDeleteDialogClose, // Function to close the delete dialog
        handleReviewDelete, // Function to handle the review delete
        handleDelete, // Function to trigger the delete action
    } = useDeleteReviewModal(props.id);

    return (
        <>
            {/* IconButton for opening the delete modal */}
            <IconButton onClick={() => handleDelete()}>
                <DeleteIcon />
            </IconButton>

            {/* Delete Review Dialog */}
            <Dialog open={deleteDialogOpen} onClose={handleDeleteDialogClose}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    Are you sure you want to delete this review?
                </DialogContent>
                <DialogActions>
                    {/* Buttons for canceling and confirming the review delete action */}
                    <Button onClick={handleDeleteDialogClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleReviewDelete} color="primary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
