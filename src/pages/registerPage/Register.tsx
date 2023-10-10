import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router';
import { NavigationRoutes } from 'types/NavigationRoutes';

export function Register() {
  const navigate = useNavigate();

    const [formData, setFormData] = useState({
      username: '',
      password: '',
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      fetch("https://localhost:7175/User", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({username: formData.username, password: formData.password})
      }).then(() => {
        navigate(NavigationRoutes.Login);
      })
    };
  
    return (
      <Container maxWidth="xs" style={{marginTop: "2%"}}>
        <div>
          <Typography variant="h4" align="center" gutterBottom>
            Register
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={formData.username}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  variant="outlined"
                  required
                />
              </Grid>
            </Grid>
            <Button
              style={{marginTop: "2%"}}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Register
            </Button>
            <Typography variant="body2" align="center" marginTop="16px">
              Already have an account? <Link href="/login">Login</Link>
            </Typography>
          </form>
        </div>
      </Container>
    );
  };