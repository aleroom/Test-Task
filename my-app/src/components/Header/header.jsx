import React from 'react';
import './header.css';
import Loader from '../Loader/loader.jsx';
import PlayerInfo from '../PlayerInfo/playerInfo';  
import Spinner from '../Spinner/spinner.jsx';



const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <span>Pocker</span>
        <Spinner />
        <PlayerInfo />
        <Loader/>
      </div>
    </header>
  );
};

export default Header;