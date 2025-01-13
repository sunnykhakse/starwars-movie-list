import React, {FC} from 'react';
import './StarRating.css';

interface StarRatingProps {
  rating: number; 
  maxRating?: number; 
}

const StarRating: FC<StarRatingProps> = ({ rating, maxRating = 10 }) => {
  const totalStars = 10;
  const starPercentage = (rating / maxRating) * totalStars;
  const fullStars = Math.round(starPercentage);
  const emptyStars = totalStars - fullStars;

  return (
    <div className='star'>
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full-${index}`} className='solid'>★</span>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`}>☆</span>
      ))}
    </div>
  );
};

export default StarRating;