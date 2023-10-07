import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Movies } from './pages/moviesPage/Movies';
import { NotFound } from './pages/errorPage/Error';
import { NavbarWrapper } from './components/navbar/wrappers/NavbarWrapper';
import { Reviews } from './pages/reviewsPage/Reviews';
import { Login } from './pages/loginPage/Login';
import { AuthGuard } from './components/authGuard/AuthGuard';
import { Register } from './pages/registerPage/Register';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<AuthGuard children={<NavbarWrapper children={<Movies />}/>} />} />
        <Route path="/movies" element={<AuthGuard children={<NavbarWrapper children={<Movies />}/>} />} />
        <Route path="/reviews" element={<AuthGuard children={<NavbarWrapper children={<Reviews />}/>} />} />
        <Route path="/login" Component={Login}/>
        <Route path="/register" Component={Register}/>
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 