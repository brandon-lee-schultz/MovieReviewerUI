import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteReviewModal } from "./hooks/useDeleteReviewModal";
import { UUID } from "crypto";

interface DeletReviewModalProps {
    id: string
}

export function DeleteReviewModal(props: DeletReviewModalProps) {
    const { deleteDialogOpen, 
        handleDeleteDialogClose, 
        handleReviewDelete, 
        handleDelete } = useDeleteReviewModal(props.id);

    return (<>
    <IconButton onClick={() => handleDelete()}>
        <DeleteIcon />
        </IconButton>
        
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
        </Dialog></>)
}