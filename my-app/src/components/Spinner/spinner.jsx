import React from 'react';
import './spinner.css';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Spinner;