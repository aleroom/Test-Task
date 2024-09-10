import React, { useState } from 'react';import '../taskBoard.less';

function MyComponent() {
  const [isGreen, setIsGreen] = useState(false);

  const handleClick = () => {
    setIsGreen(true);
  };

  return (
    <div className='taskBoard-left-text'>
      <span onClick={handleClick} style={{ color: isGreen ? 'green' : 'white' }}>
        OFC Pineapple
      </span>
    </div>
  );
}

export default MyComponent;