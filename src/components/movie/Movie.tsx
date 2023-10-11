// Import necessary components and modules from dependencies and local files
import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { AddReviewModal } from "../addReview/AddReviewModal";
import { useMovie } from "./hooks/useMovie";

// Define the props interface for the 'Movie' component
interface MovieProps {
  id: string,
  title: string,
  image: string,
  year: number,
  index: number
}

// Define the 'Movie' component function
export function Movie(props: MovieProps): JSX.Element {
  // Use the custom hook 'useMovie' to manage the modal state and review functionality
  const { isModalOpen, openModal, closeModal, saveReview } = useMovie();

  return (
    // Render the movie card within a Grid item
    <Grid item xs={12} sm={6} md={4} key={props.index}>
      <Card>
        <CardMedia
          component="img"
          alt={props.title}
          height="400"
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography variant="h6">{props.title}</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Year: {props.year}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={openModal} // Trigger the modal opening
          >
            Add Review
          </Button>
          <AddReviewModal
            movieId={props.id}
            open={isModalOpen} // Pass the modal state
            onClose={closeModal} // Pass the modal closing function
            onSave={saveReview} // Pass the function to save a review
          />
        </CardContent>
      </Card>
    </Grid>
  );
}
