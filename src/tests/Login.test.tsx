import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from '../pages/loginPage/Login';
import React from 'react';

test('renders the Login component', () => {
    render(<Login />);
    // Ensure that the login form and related UI elements are rendered
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
  });
