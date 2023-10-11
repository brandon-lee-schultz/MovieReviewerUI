// Import the 'useNavigate' hook from the 'react-router-dom' library, which provides navigation functionality
import { useNavigate } from "react-router-dom";

// Define a custom function named 'useLogout'
export function useLogout() {
    // Retrieve the 'navigate' function from the 'useNavigate' hook
    const navigate = useNavigate();

    // Use the 'navigate' function to redirect the user to the '/login' route
    navigate("/login");
}
