import './rating.css';
import { MaximumRating } from 'constants/MaximumValues';

interface StarRatingProps {
  rating: number;
}

export function Rating (props: StarRatingProps){
  return (
    <div className='stars'>
      
      {MaximumRating.map((star) => (
        <span
          key={star}
          style={{
            color: star <= (props.rating) ? '#ff9800' : '#ccc',
          }}>
          ★
        </span>
      ))}
    </div>
  );
};