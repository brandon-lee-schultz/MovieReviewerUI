// Import necessary dependencies from 'react' and the 'Navbar' component
import { ReactNode } from 'react';
import { Navbar } from '../Navbar';

// Define the props interface for the 'NavbarWrapper' component
interface NavbarWrapperProps {
  children?: ReactNode;
}

// Create the 'NavbarWrapper' component as a regular function
export function NavbarWrapper(props: NavbarWrapperProps): JSX.Element {
  // Render the component, which wraps the 'Navbar' and displays its children
  return (
    <div>
      <Navbar />     {/*// Renders the 'Navbar' component */}
      {props.children}  {/*// Renders any child components or content passed as props */}
    </div>
  );
};
