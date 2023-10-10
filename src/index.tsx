// Import necessary modules and components
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Movies } from './pages/moviesPage/Movies';
import { NavbarWrapper } from './components/navbar/wrappers/NavbarWrapper';
import { Reviews } from './pages/reviewsPage/Reviews';
import { Login } from './pages/loginPage/Login';
import { AuthGuard } from './components/authGuard/AuthGuard';
import { Register } from './pages/registerPage/Register';
import { NavigationRoutes } from 'types/NavigationRoutes';
import { Logout } from 'pages/logout/Logout';
import { Store } from 'store/store';
import { Provider } from 'react-redux';

// Create a root for rendering React components
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Set the document title
document.title = 'Movie Reviewer';

// Render the React component tree inside the root
root.render(
  <React.StrictMode>
    {/* Provide the Redux store to the entire application */}
    <Provider store={Store}>
      {/* Set up routing with React Router */}
      <Router>
        {/* Use an authentication guard for protected routes */}
        <AuthGuard protectedRoutes={[NavigationRoutes.Movies, NavigationRoutes.Reviews, NavigationRoutes.Logout]}>
          {/* Define the routes */}
          <Routes>
            <Route path="/" element={<NavbarWrapper children={<Login />} />} />
            <Route path="/movies" element={<NavbarWrapper children={<Movies />} />} />
            <Route path="/reviews" element={<NavbarWrapper children={<Reviews />} />} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/logout" Component={Logout} />
          </Routes>
        </AuthGuard>
      </Router>
    </Provider>
  </React.StrictMode>
);

// Measure and report web vitals
reportWebVitals();
