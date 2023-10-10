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
    const userId = sessionStorage.getItem("userId");

   return (<>
    <ListItem key={props.index}>
        <ListItemText primary={props.review.movieName} secondary={props.review.comment} />
        <span>Created By: {props.review.reviewer}</span>
        <Rating rating={props.review.rating} />
        <ListItemSecondaryAction>
            {userId === props.review.userId && (
                <>
                <EditReviewModal review={props.review}/>
                <DeleteReviewModal id={props.review.id}/>
                </>
            )}
        </ListItemSecondaryAction>
    </ListItem></>)
}