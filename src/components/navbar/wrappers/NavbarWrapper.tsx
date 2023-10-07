import { ReactNode } from 'react';
import { Navbar } from '../Navbar';

interface NavbarWrapperProps {
    children?: ReactNode;
  }

export const NavbarWrapper: React.FC<NavbarWrapperProps> = (props: NavbarWrapperProps) => {
    return (
      <div>
        <Navbar />
        {props.children}
      </div>
    );
  };