import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/navbar.css'; // Separate CSS file for the navbar

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate('/')}>
        <h1>HotelFinder</h1>
      </div>
      <ul className="nav-links">
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/hotels')}>Hotel List</li>
      </ul>
    </nav>
  );
};

export default Navbar;
