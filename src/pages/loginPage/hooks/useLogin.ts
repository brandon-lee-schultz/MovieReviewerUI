import { InvalidUsernameOrPassword } from "../../../constants/ErrorMessages";
import { useLoginAuthenticate } from "../../../hooks/useAuthentication";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavigationRoutes } from "../../../types/NavigationRoutes";

interface UseLogin {
    usernameError: string,
    passwordError: string,
    handleLogin: () => void
}

interface useLoginProps {
    username: string,
    password: string
}

export function useLogin(props: useLoginProps): UseLogin {
    const navigate = useNavigate();

    const { authenticated } = useLoginAuthenticate(props.username, props.password);

    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = () => {
    if (!props.username) {
      setUsernameError('Username is required');
    } else {
      setUsernameError('');
    }

    if (!props.password) {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }

    if (props.username && props.password) {
  
      if (!authenticated) 
      {
        setUsernameError(InvalidUsernameOrPassword);
        setPasswordError(InvalidUsernameOrPassword);
      }
      else
      {
        navigate(NavigationRoutes.Movies);
      }
    }
  };

  return {
    usernameError,
    passwordError,
    handleLogin
  }
}