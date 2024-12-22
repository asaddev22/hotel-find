import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HotelsList from './Components/HotelsList';
import Home from './Components/Home';
import Navbar from './Components/Navbar'; 
import HotelDetail from './Components/HotelDetails'; // Import the HotelDetail component

import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Include the Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelsList />} />
        <Route path="/hotels/:id" element={<HotelDetail />} />
        <Route path="*" element={<Navigate to="/hotels" />} /> {/* Redirect to /hotels for any unknown route */}
      </Routes>
    </Router>
  );
};

export default App;
