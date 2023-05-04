
import React, { useState } from 'react';


const StarRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    onRatingChange(value);
  };

  const getStarClassName = (index) => {
    if (rating >= index) {
      return 'star filled';
    } else {
      return 'star';
    }
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={getStarClassName(index + 1)}
          onClick={() => handleClick(index + 1)}
        >
          ★
        </span>
      ))}
    </div>
  );
};
export default StarRating; 

