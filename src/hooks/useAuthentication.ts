// Import necessary modules and components
import { apiUrl } from "../config"; // Import the API base URL from the configuration
import { useState } from "react"; // Import the useState hook from React
import { ControllerTypes } from "../types/ControllerTypes"; // Import types for controllers

// Define an interface for the return value of useLoginAuthenticate and useLogoutAuthenticate
interface UseAuthentication {
  authenticated: boolean; // Indicates whether the user is authenticated
}

// Custom hook for authentication on login
export function useLoginAuthenticate(username: string, password: string): UseAuthentication {
  // Initialize the isAuthenticated state with false
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Check if either username or password is empty
  if (username === "" || password === "") {
    // If either is empty, return the current authentication status
    return {
      authenticated: isAuthenticated,
    };
  }

  // Function to authenticate the user
  const authenticateUser = async () => {
    try {
      // Make a fetch request to the authentication API endpoint
      const response = await fetch(`${apiUrl}${ControllerTypes.User}?username=${username}&password=${password}`);
      const data = await response.json();

      // Check if the provided username and password match the data from the API
      if (username === data.username && password === data.password) {
        // If they match, store the user ID in sessionStorage and set isAuthenticated to true
        sessionStorage.setItem("userId", data.id);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Authentication failed: ", error);
    } finally {
      // Store the current authentication status in sessionStorage
      sessionStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
    }
  };

  // Call the authentication function
  authenticateUser();

  // Return the current authentication status
  return {
    authenticated: isAuthenticated,
  };
}

// Custom hook for authentication on logout
export function useLogoutAuthenticate(): UseAuthentication {
  // Remove the isAuthenticated item from sessionStorage
  sessionStorage.removeItem("isAuthenticated");

  // Return false as the user is no longer authenticated
  return {
    authenticated: false,
  };
}
