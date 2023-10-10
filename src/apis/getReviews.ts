import { Review } from "types/Review";

export function getReviews(): Review[] {
    const apiUrl = "https://localhost:7175/Review";

    fetch(apiUrl)
    .then((response) => {
        if (!response.ok)
        {
            throw new Error('An error occured trying to retrieve movies.')
        }

        return response.json();
    })
    .then((data) => {
        return data as Review[];
    })
    .catch((err) => {
        console.log(err)
    })

    return [];
}