import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useState } from "react";
import AddReviewModal from "../addReview/AddReviewModal";

interface MovieProps {
    title: string,
    image: string,
    year: number,
    index: number
}

export function Movie(props: MovieProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveReview = (movieTitle: string, comment: string, rating: number) => {
    // Handle saving the review data here
    console.log(`MovieTitle: ${movieTitle}, Comment: ${comment}, Rating: ${rating}`);
  };

    return (
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
            onClick={openModal}
          >
            Add Review
          </Button>
            <AddReviewModal movieTitle={props.title} open={isModalOpen} onClose={closeModal} onSave={saveReview} />
        </CardContent>
      </Card>
      </Grid>)
}