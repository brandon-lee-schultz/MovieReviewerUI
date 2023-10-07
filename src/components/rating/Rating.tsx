import React, { useState } from 'react';
import './Rating.css';

interface StarRatingProps {
  rating: number;
}

export function Rating (props: StarRatingProps){
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  return (
    <div className='stars'>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            cursor: 'pointer',
            color: star <= (hoverRating || props.rating) ? '#ff9800' : '#ccc',
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};