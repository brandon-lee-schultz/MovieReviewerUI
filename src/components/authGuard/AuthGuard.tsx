// Import necessary dependencies and modules
import { ReactNode, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavigationRoutes } from 'types/NavigationRoutes';

// Define the props interface for the 'AuthGuard' component
interface AuthGuardProps {
  children: ReactNode;
  protectedRoutes: string[];
}

// Define the 'AuthGuard' component function
export function AuthGuard(props: AuthGuardProps): JSX.Element {
  // Initialize the router navigation and location objects
  const navigate = useNavigate();
  const location = useLocation();
  
  // Retrieve the 'isAuthenticated' value from session storage or default to 'false'
  const isAuthenticated = JSON.parse(sessionStorage.getItem("isAuthenticated") || 'false');

  // Set up an effect to handle route redirection based on authentication status
  useEffect(() => {
    // Determine if the current route is not in the protected routes list
    const isNotProtectedRoute = !props.protectedRoutes.includes(location.pathname);

    // Determine if the current route is in the protected routes list
    const isProtectedRoute = props.protectedRoutes.includes(location.pathname);

    if (!isAuthenticated) {
      // Redirect to the current route or the login route if not authenticated
      if (isNotProtectedRoute) {
        navigate(location.pathname);
      } else {
        navigate(NavigationRoutes.Login);
      }
    } else if (isProtectedRoute) {
      // Redirect to the current route if authenticated and on a protected route
      navigate(location.pathname);
    } else {
      // Redirect to the movies route if authenticated and not on a protected route
      navigate(NavigationRoutes.Movies);
    }
  }, [isAuthenticated, location.pathname, navigate, props.protectedRoutes]);

  // Render the child components
  return <>{props.children}</>;
}