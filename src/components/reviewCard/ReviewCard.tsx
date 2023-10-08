import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from "@mui/material";
import { Review } from "types/Review";
import DeleteIcon from '@mui/icons-material/Delete';
import { Rating } from "../rating/Rating";
import { useReviewCard } from "./hooks/useReviewCard";
import { EditReviewModal } from "../editReviewModal/EditReviewModal";

interface ReviewCardProps {
    review: Review,
    index: number
}

export function ReviewCard(props: ReviewCardProps) {
    const {review} = props;

    const {handleDelete} = useReviewCard();
   
   return (<>
      <ListItem key={props.index}>
            <ListItemText primary={review.movieName} secondary={review.reviewText} />
            <ListItemSecondaryAction>
              <EditReviewModal review={review}/>
              <IconButton onClick={() => handleDelete(review)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
            <Rating rating={review.rating} />
            </ListItem>
          </>)
}