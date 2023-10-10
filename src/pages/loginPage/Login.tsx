import { useState } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
  FormHelperText,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useLogin } from './hooks/useLogin';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {usernameError, passwordError, handleLogin} = useLogin({username, password});

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
      </Paper>
    </Container>
  );
};
