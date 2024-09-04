import React from 'react';
import './rating.css';

const Rating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - filledStars - halfStar;

  return (
    <div className="rating">
      {Array.from({ length: filledStars }, (_, index) => (
        <svg key={index} className="star" viewBox="0 0 20 20">
          <path
            fill="#FFD700" // 
            d="M16.938,7.063c0.814,0.814,2.122,0.814,2.937,0l1.104-1.104c0.814-0.814,0.814-2.122,0-2.937L15.063,7.063c-0.814-0.814-2.123-0.814-2.937,0l-1.104,1.104c-0.814,0.814-0.814,2.123,0,2.937l1.104,1.104c0.814,0.814,2.123,0.814,2.937,0l1.104-1.104c0.814-0.814,0.814-2.123,0-2.937L16.938,7.063z"
          />
        </svg>
      ))}
      {halfStar === 1 && (
        <svg className="star" viewBox="0 0 20 20">
          <path
            fill="#FFD700" // желтый цвет
            d="M16.938,7.063c0.814,0.814,2.122,0.814,2.937,0l1.104-1.104c0.814-0.814,0.814-2.122,0-2.937L15.063,7.063c-0.814-0.814-2.123-0.814-2.937,0l-1.104,1.104c-0.814,0.814-0.814,2.123,0,2.937l1.104,1.104c0.814,0.814,2.123,0.814,2.937,0l1.104-1.104c0.814-0.814,0.814-2.123,0-2.937L16.938,7.063z"
          />
        </svg>
      )}
      {Array.from({ length: emptyStars }, (_, index) => (
        <svg key={index} className="star" viewBox="0 0 20 20">
          <path
            fill="#CCC" // серо-желтый цвет
            d="M16.938,7.063c0.814,0.814,2.122,0.814,2.937,0l1.104-1.104c0.814-0.814,0.814-2.122,0-2.937L15.063,7.063c-0.814-0.814-2.123-0.814-2.937,0l-1.104,1.104c-0.814,0.814-0.814,2.123,0,2.937l1.104,1.104c0.814,0.814,2.123,0.814,2.937,0l1.104-1.104c0.814-0.814,0.814-2.123,0-2.937L16.938,7.063z"
          />
        </svg>
      ))}
    </div>
  );
};

export default Rating;