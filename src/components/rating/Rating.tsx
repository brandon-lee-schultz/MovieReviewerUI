// Import the CSS file for styling.
import './rating.css';

// Import the 'MaximumRating' constant from 'constants/MaximumValues'.
import { MaximumRating } from 'constants/MaximumValues';

// Define an interface for the component's props.
interface StarRatingProps {
  rating: number; // The rating value to display stars for.
}

// Create the 'Rating' component.
export function Rating(props: StarRatingProps): JSX.Element {
  return (
    <div className='stars' title={`${props.rating} Stars`}>
      {MaximumRating.map((star) => (
        <span
          key={star} // Provide a unique key for each star element.
          style={{
            color: star <= props.rating ? '#ff9800' : '#ccc', // Set star color based on the rating.
          }}>
          ★
        </span>
      ))}
    </div>
  );
};
