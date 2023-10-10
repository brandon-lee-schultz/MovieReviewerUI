import { useState } from "react";
import { EditReviewModalProps } from "../EditReviewModal";
import { Review } from "types/Review";

interface UseEditReviewModal {
    editDialogOpen: boolean,
    handleEditDialogClose: () => void,
    handleReviewEdit: () => void,
    handleEdit: () => void
}
export function useEditReviewModal(props: Review): UseEditReviewModal {
    const [editDialogOpen, setEditDialogOpen] = useState(false);

    const handleEditDialogClose = () => {
        setEditDialogOpen(false);
    };

    const handleReviewEdit = () => {
        const apiUrl = "https://localhost:7175/Review";
        fetch(apiUrl,{method: 'PUT', headers: {
          'Content-Type': 'application/json', 
        }, body: JSON.stringify(props)})

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