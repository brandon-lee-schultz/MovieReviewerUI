// Import necessary modules and interfaces
import { apiUrl } from "config";
import { useState } from "react";
import { ControllerTypes } from "types/ControllerTypes";
import { Review } from "types/Review";

// Define the interface for the custom hook's return values
interface UseEditReviewModal {
    editDialogOpen: boolean; // A boolean to track the edit dialog open/close state
    handleEditDialogClose: () => void; // Function to close the edit dialog
    handleReviewEdit: () => void; // Function to handle the review edit
    handleEdit: () => void; // Function to trigger editing
}

// Define the 'useEditReviewModal' custom hook function
export function useEditReviewModal(props: Review): UseEditReviewModal {
    // Initialize state variable for the edit dialog open/close state
    const [editDialogOpen, setEditDialogOpen] = useState(false);

    // Function to close the edit dialog
    const handleEditDialogClose = () => {
        setEditDialogOpen(false); // Set 'editDialogOpen' to 'false' when closing the dialog
    };

    // Function to handle the review edit
    const handleReviewEdit = () => {
        // Send a PUT request to update the review data on the server
        fetch(`${apiUrl}${ControllerTypes.Review}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(props), // Send the edited review data
        });

        handleEditDialogClose(); // Close the edit dialog after sending the request
    };

    // Function to open the edit dialog
    const handleEdit = () => {
        setEditDialogOpen(true); // Set 'editDialogOpen' to 'true' when opening the dialog
    };

    // Return an object containing the hook's functions and state
    return {
        editDialogOpen, // The current state of the edit dialog
        handleEditDialogClose, // Function to close the edit dialog
        handleReviewEdit, // Function to handle the review edit
        handleEdit, // Function to trigger editing
    };
}
