import { UUID } from "crypto";
import { useState } from "react";

interface UseDeleteReviewModal {
    deleteDialogOpen: boolean,
    handleDeleteDialogClose: () => void,
    handleReviewDelete: () => void,
    handleDelete: () => void
}

export function useDeleteReviewModal(props: string): UseDeleteReviewModal {
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    
    const handleDeleteDialogClose = () => {
        setDeleteDialogOpen(false);
      };

      const handleReviewDelete = () => {
        const deleteData = {id: props};

        const apiUrl = "https://localhost:7175/Review";
        fetch(apiUrl,{method: 'DELETE', headers: {
          'Content-Type': 'application/json', 
        }, body: JSON.stringify(deleteData)})
     
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