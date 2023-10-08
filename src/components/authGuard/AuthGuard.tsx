import { ReactNode, useEffect, useMemo, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavigationRoutes } from 'types/NavigationRoutes';

interface AuthGuardProps {
  children: ReactNode;
  protectedRoutes: string[];
}

export function AuthGuard(props: AuthGuardProps) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isAuthenticatedFromSession = sessionStorage.getItem("isAuthenticated");
  const isAuthenticated = JSON.parse(isAuthenticatedFromSession || 'false');

  useEffect(() => {
    if (!isAuthenticated) {
        const isNotProtectedRoute = !props.protectedRoutes.includes(location.pathname);
        if (isNotProtectedRoute)
        {
          navigate(location.pathname);
        }
        else
        {
          navigate(NavigationRoutes.Login);
        }
    } else {
      const isProtectedRoute = props.protectedRoutes.includes(location.pathname);

      if (isProtectedRoute) {
        navigate(location.pathname);
      }
      else
      {
        navigate(NavigationRoutes.Movies);
      }
    }
  }, [isAuthenticated, location.pathname, navigate, props.protectedRoutes]);

  return <>{props.children}</>;
}