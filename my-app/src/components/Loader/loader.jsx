import React from 'react';

const Loader = () => {
  return (
    <div style={{
        top: 0,
        left: 0,
    
        width: '100%' ,  
        height: 5,
        backgroundColor: 'grey',
        zIndex: 1000,
    }}>
      <div style={{
        width: '70%', //
        height: 5,
        backgroundColor: '#00BB40',
        
      }} />
      
    </div>
    
  );
};

export default Loader;