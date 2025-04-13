// src/components/LoadingScreen.jsx
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="loader">
      <div className="loader-content">
        <h1>Portfolio Experience</h1>
        <p>Preparing an immersive 3D journey through my work and skills</p>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;