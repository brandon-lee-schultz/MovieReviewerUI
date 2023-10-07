import React, { useState } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
  FormHelperText,
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simple validation
    if (!username) {
      setUsernameError('Username is required');
    } else {
      setUsernameError('');
    }

    if (!password) {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }

    if (username && password) {
      // Add your login logic here
      console.log('Logging in...');
      navigate("/");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '50px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={Boolean(usernameError)}
          />
          {usernameError && (
            <FormHelperText error>{usernameError}</FormHelperText>
          )}
          <TextField
            label="Password"
            fullWidth
            margin="normal"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(passwordError)}
          />
          {passwordError && (
            <FormHelperText error>{passwordError}</FormHelperText>
          )}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
          >
            Login
          </Button>
        </form>
        <Typography align="center" style={{ marginTop: '10px' }}>
          <Link component={RouterLink} to="/register" color="secondary">
            Register
          </Link>
        </Typography>
        <Typography align="center" style={{ marginTop: '10px' }}>
          <Link href="#" color="secondary">
            Forgot Password?
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};
