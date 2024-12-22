import React from 'react';
import '../Styles/home.css';

const Home: React.FC = () => {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url('/resort.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="content">
        <h1 className="welcome-text">Welcome to Hotel Finder</h1>
        <p className="subtext">Find the best hotels for your next trip.</p>
        <a href="/hotels" className="explore-button">
          Explore Now
        </a>
      </div>
    </div>
  );
};

export default Home;
