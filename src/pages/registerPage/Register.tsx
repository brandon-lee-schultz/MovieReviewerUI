/**
 * This component represents a user registration form in a React application.
 *
 * It allows users to input their username and password for registration and sends the
 * registration data to a specified endpoint when the form is submitted. After successful
 * registration, the user is navigated to the login page.
 *
 * @component
 */
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
import { apiUrl } from 'config';
import { ControllerTypes } from 'types/ControllerTypes';

export function Register(): JSX.Element {
  // Initialize the React Router navigation hook
  const navigate = useNavigate();

  // Initialize the state to store the form data (username and password)
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  /**
   * Event handler function to update the form data when the user types in the input fields.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event object representing the input change.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /**
   * Event handler function for form submission.
   * It sends a POST request to the server with the registration data and navigates to the login page
   * upon successful registration.
   *
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch(`${apiUrl}${ControllerTypes.User}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: formData.username, password: formData.password })
    }).then(() => {
      navigate(NavigationRoutes.Login);
    });
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "2%" }}>
      <div>
        <Typography variant="h4" align="center" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="First Name"  // Consider updating the label text to "Username"
                name="username"   // Consider updating the name attribute to "username"
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
            style={{ marginTop: "2%" }}
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
