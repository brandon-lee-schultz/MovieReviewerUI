// Import necessary modules and interfaces
import { apiUrl } from "config";
import { useState } from "react";
import { ControllerTypes } from "types/ControllerTypes";

// Define the interface for the custom hook's return values
interface UseDeleteReviewModal {
    deleteDialogOpen: boolean; // A boolean to track the delete dialog open/close state
    handleDeleteDialogClose: () => void; // Function to close the delete dialog
    handleReviewDelete: () => void; // Function to handle the review delete
    handleDelete: () => void; // Function to trigger the delete action
}

// Define the 'useDeleteReviewModal' custom hook function
export function useDeleteReviewModal(props: string): UseDeleteReviewModal {
    // Initialize state variable for the delete dialog open/close state
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    // Function to close the delete dialog
    const handleDeleteDialogClose = () => {
        setDeleteDialogOpen(false); // Set 'deleteDialogOpen' to 'false' when closing the dialog
    };

    // Function to handle the review delete
    const handleReviewDelete = () => {
        // Create the data to be deleted (usually an ID in this case)
        const deleteData = { id: props };

        fetch(`${apiUrl}${ControllerTypes.Review}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(deleteData), // Send the data to be deleted
        });

        handleDeleteDialogClose(); // Close the delete dialog after sending the request
    };

    // Function to open the delete dialog
    const handleDelete = () => {
        setDeleteDialogOpen(true); // Set 'deleteDialogOpen' to 'true' when opening the dialog
    };

    // Return an object containing the hook's functions and state
    return {
        deleteDialogOpen, // The current state of the delete dialog
        handleDeleteDialogClose, // Function to close the delete dialog
        handleReviewDelete, // Function to handle the review delete
        handleDelete, // Function to trigger the delete action
    };
}