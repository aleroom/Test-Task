import React, { useState } from 'react';

const Button = () => {
  const [isCancelled, setIsCancelled] = useState(false);

  const handleButtonClick = () => {
    setIsCancelled(true);
  };

  return (
    <button
      className={`join-button ${isCancelled ? 'cancelled' : ''}`}
      onClick={handleButtonClick}
      style={{
        backgroundColor: isCancelled ? '#ccc' : '#2ecc71',
        borderRadius: '4px',
        border: 'none',
        color: isCancelled ? '#666' : '#fff',
        width: '80px',
        height: '34px',
        fontSize: '10px',
        cursor: 'pointer',
        textTransform: 'uppercase',
        
      }}
    >
      {isCancelled ? 'Cancelled' : 'Join Table'}
    </button>
  );
};

export default Button;    
    
