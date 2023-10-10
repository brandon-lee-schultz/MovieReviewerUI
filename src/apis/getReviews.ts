// Import necessary modules and components
import { apiUrl } from "config";
import { Review } from "types/Review";

// Function to retrieve reviews
export function getReviews(): Promise<Review[]> {
  // Make a fetch request to the reviews API endpoint
  return fetch(`${apiUrl}/Review`)
    .then((response) => {
      // Check if the response is not OK (i.e., there was an error)
      if (!response.ok) {
        // Throw an error with a custom message
        throw new Error('An error occurred while trying to retrieve reviews.');
      }

      // Parse the response body as JSON and return it as an array of Review objects
      return response.json() as Promise<Review[]>;
    })
    .catch((err) => {
      // Log any errors that occur during the fetch request
      console.log(err);

      // Return an empty array in case of an error
      return [];
    });
}