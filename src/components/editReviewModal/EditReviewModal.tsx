import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton } from "@mui/material";
import { useEditReviewModal } from "./hooks/useEditReviewModal";
import EditIcon from '@mui/icons-material/Edit';

export function EditReviewModal() {
    const { editDialogOpen, handleEditDialogClose, handleReviewEdit, handleEdit } = useEditReviewModal();
    return (<>
    <IconButton onClick={() => handleEdit()}>
        <EditIcon />
    </IconButton>

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
      </>)
}