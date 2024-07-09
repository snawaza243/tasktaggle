import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Admin Panel</h2>
      <nav>
        <ul>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/admin">Admin Panel</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
