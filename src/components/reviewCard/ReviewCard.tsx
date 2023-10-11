// Import necessary components from Material-UI and custom components
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from "@mui/material"; // Material-UI components
import { Review } from "types/Review"; // Import the Review type
import { Rating } from "../rating/Rating"; // Custom Rating component
import { EditReviewModal } from "../editReviewModal/EditReviewModal"; // Custom modal for editing reviews
import { DeleteReviewModal } from "../deleteReviewModal/DeleteReviewModal"; // Custom modal for deleting reviews

// Define the properties expected by the ReviewCard component
interface ReviewCardProps {
    review: Review; // The review data to display
    index: number; // The index of the review in the list
}

// ReviewCard component to display a single review
export function ReviewCard(props: ReviewCardProps): JSX.Element {
    const userId = sessionStorage.getItem("userId"); // Get the current user's ID from sessionStorage

    return (
        <>
            {/* List item to display review details */}
            <ListItem key={props.index}>
                <ListItemText primary={props.review.movieName} secondary={props.review.comment} />
                <span>Created By: {props.review.reviewer}</span>
                <Rating rating={props.review.rating} /> {/* Display the rating using the Rating component */}
                <ListItemSecondaryAction>
                    {/* Display edit and delete options if the current user is the author of the review */}
                    {userId === props.review.userId && (
                        <>
                            <EditReviewModal review={props.review} /> {/* Edit review modal */}
                            <DeleteReviewModal id={props.review.id} /> {/* Delete review modal */}
                        </>
                    )}
                </ListItemSecondaryAction>
            </ListItem>
        </>
    );
}
