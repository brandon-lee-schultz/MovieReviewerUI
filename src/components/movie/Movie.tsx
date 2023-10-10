import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useState } from "react";
import AddReviewModal from "../addReview/AddReviewModal";
import { useAppDispatch, useAppSelector } from "store/store";
import { saveReviews } from "store/features/reviewSlice";

interface MovieProps {
    id: string,
    title: string,
    image: string,
    year: number,
    index: number
}

export function Movie(props: MovieProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const dispatch = useAppDispatch();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveReview = (movieId: string, comment: string, rating: number) => {
    const userId = sessionStorage.getItem("userId") as string;

    dispatch(saveReviews({comment, rating, movieId, userId}))
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
            <AddReviewModal movieId={props.id} open={isModalOpen} onClose={closeModal} onSave={saveReview} />
        </CardContent>
      </Card>
      </Grid>)
}