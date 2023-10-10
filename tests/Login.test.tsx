// Login.test.tsx
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Login } from '../src/pages/loginPage/Login';

// Mock the useLogin hook
jest.mock('../src/pages/loginPage/hooks/useLogin', () => ({
  useLogin: ({ username, password }) => ({
    usernameError: username === '' ? 'Username is required' : '',
    passwordError: password === '' ? 'Password is required' : '',
    handleLogin: () => {},
  }),
}));

test('renders the Login component', () => {
  render(<Login />);

  // Check if the component renders correctly
  const loginTitle = screen.getByText('Login');
  expect(loginTitle).toBeInTheDocument();

  // Check if username and password inputs are present
  const usernameInput = screen.getByLabelText('Username');
  const passwordInput = screen.getByLabelText('Password');
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test('displays error messages for empty username and password', () => {
  render(<Login />);

  // Submit the form without entering anything
  const loginButton = screen.getByText('Login');
  fireEvent.click(loginButton);

  // Check if error messages are displayed
  const usernameError = screen.getByText('Username is required');
  const passwordError = screen.getByText('Password is required');
  expect(usernameError).toBeInTheDocument();
  expect(passwordError).toBeInTheDocument();
});

test('performs login action when fields are filled', () => {
  render(<Login />);

  // Fill in the username and password fields
  const usernameInput = screen.getByLabelText('Username');
  const passwordInput = screen.getByLabelText('Password');
  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
  fireEvent.change(passwordInput, { target: { value: 'testpassword' }});

  // Submit the form
  const loginButton = screen.getByText('Login');
  fireEvent.click(loginButton);

  // You can add expectations here for the login action, like making an API call, etc.
  // You may want to mock the API calls if necessary and assert on the expected behavior.
});
