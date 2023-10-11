// Import necessary modules and components
import { useState } from "react";
import { saveReviews } from "store/features/saveReviews";
import { useAppDispatch } from "store/store";

// Define the interface for the custom hook's return values
interface UseMovie {
  isModalOpen: boolean; // A boolean to track modal open/close state
  openModal: () => void; // Function to open the modal
  closeModal: () => void; // Function to close the modal
  saveReview: (movieId: string, comment: string, rating: number) => void; // Function to save a review
}

// Define the custom hook 'useMovie' to manage modal and review functionality
export function useMovie(): UseMovie {
  // Initialize a state variable 'isModalOpen' and a function to set it
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Get the dispatch function from the Redux store
  const dispatch = useAppDispatch();

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true); // Set 'isModalOpen' to 'true' when opening the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false); // Set 'isModalOpen' to 'false' when closing the modal
  };

  // Function to save a review, taking 'movieId', 'comment', and 'rating' as parameters
  const saveReview = (movieId: string, comment: string, rating: number) => {
    // Get the user's ID from session storage
    const userId = sessionStorage.getItem("userId") as string;

    // Dispatch an action to save the review using Redux
    dispatch(saveReviews({ comment, rating, movieId, userId }));
  };

  // Return an object containing the hook's functions and state
  return {
    isModalOpen, // The current state of the modal
    openModal, // Function to open the modal
    closeModal, // Function to close the modal
    saveReview, // Function to save a review
  };
}
