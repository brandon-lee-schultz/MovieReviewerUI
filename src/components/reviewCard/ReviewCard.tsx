import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from "@mui/material";
import { Review } from "types/Review";
import { Rating } from "../rating/Rating";
import { EditReviewModal } from "../editReviewModal/EditReviewModal";
import { DeleteReviewModal } from "../deleteReviewModal/DeleteReviewModal";

interface ReviewCardProps {
    review: Review,
    index: number
}

export function ReviewCard(props: ReviewCardProps) {
    const {review} = props;

   return (<>
    <ListItem key={props.index}>
        <ListItemText primary={review.movieName} secondary={review.reviewText} />
        <Rating rating={review.rating} />
        <ListItemSecondaryAction>
            <EditReviewModal review={review}/>
            <DeleteReviewModal />
        </ListItemSecondaryAction>
    </ListItem></>)
}