// Import the 'useLogoutAuthenticate' hook from the 'useAuthentication' module
import { useLogoutAuthenticate } from "hooks/useAuthentication";

// Import the CSS file for styling (assuming it's named 'logout.css')
import './logout.css';

// Define a functional component named 'Logout'
export function Logout(): JSX.Element {
    // Call the 'useLogoutAuthenticate' hook, which handles logout/authentication logic
    useLogoutAuthenticate();
    
    // Return '<></>' since this component doesn't render any visible content
    return <></>;
}
