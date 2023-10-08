import { useState } from "react";
import { Review } from "types/Review";

interface UseDeleteReviewModal {
    deleteDialogOpen: boolean,
    handleDeleteDialogClose: () => void,
    handleReviewDelete: () => void,
    handleDelete: () => void
}

export function useDeleteReviewModal() {
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    
    const handleDeleteDialogClose = () => {
        setDeleteDialogOpen(false);
      };

      const handleReviewDelete = () => {
        handleDeleteDialogClose();
      };

      const handleDelete = () => {
        setDeleteDialogOpen(true);
      };

      return {
        deleteDialogOpen,
        handleDeleteDialogClose,
        handleReviewDelete,
        handleDelete
      }
}