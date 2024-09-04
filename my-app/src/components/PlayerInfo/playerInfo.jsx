import React from 'react';
import './playerInfo.css';
import Rating from '../Rating/rating.jsx';
import Avatar from '../Avatar/avatar.jsx';
const PlayerInfo = () => {
    return (
        <div className="player-info">
            
            <div className="player-info__name">
                <span>LongUserName</span>
                <Rating rating={4.5} />
            </div>
            <div className="player-info__img">
            <div>
                <Avatar src="https://example.com/image.jpg" alt="" />
            </div>
            </div>
            <div className="player-info__cost">$100,500.00</div> 
        </div>
    );
}

export default PlayerInfo;