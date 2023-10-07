import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

interface MovieProps {
    title: string,
    image: string,
    year: number
}

const handleAddReview = (movieTitle: string) => {
    alert(`Add review for "${movieTitle}"`);
  };

export function Movie(props: MovieProps) {
    return (<Card>
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
            onClick={() => handleAddReview(props.title)}
          >
            Add Review
          </Button>
        </CardContent>
      </Card>)
}