import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

export const NotFound: React.FC = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};
