import React, { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthGuardProps {
  children: ReactNode;
}

export const AuthGuard: React.FC<AuthGuardProps> = (props: AuthGuardProps) => {
const navigate = useNavigate();
const  [isAuthenticated , setIsAuthenticated] = useState(true);

useEffect(() => {
  if (!isAuthenticated) {
    navigate("/login");
  }
}, [isAuthenticated]);

  return <>{props.children}</>;
};
