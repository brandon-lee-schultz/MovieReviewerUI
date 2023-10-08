import { useState } from "react";

interface UseEditReviewModal {
    editDialogOpen: boolean,
    handleEditDialogClose: () => void,
    handleReviewEdit: () => void,
    handleEdit: () => void
}
export function useEditReviewModal(): UseEditReviewModal {
    const [editDialogOpen, setEditDialogOpen] = useState(false);

    const handleEditDialogClose = () => {
        setEditDialogOpen(false);
    };

    const handleReviewEdit = () => {
        handleEditDialogClose();
    };
    
    const handleEdit = () => {
        setEditDialogOpen(true);
    };


    return {
        editDialogOpen,
        handleEditDialogClose,
        handleReviewEdit,
        handleEdit
    }

}