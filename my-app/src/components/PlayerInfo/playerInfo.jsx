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
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSHCBE1zB1p6h-x9hEJZAkfiUiInHOBufuQ&s" alt="Ava" />
            </div>
            </div>
            <div className="player-info__cost">
                <div className='player-info__cost-ellipse'>
                    <div className='player-info__cost-green-ellipse'>
                         <img src="https://png.klev.club/uploads/posts/2024-05/png-klev-club-o7sd-p-glaz-perecherknutii-png-5.png" alt="" /> </div>
                    <span>$100,500.00</span>    
                </div>
            </div> 
        </div>
    );
}

export default PlayerInfo;