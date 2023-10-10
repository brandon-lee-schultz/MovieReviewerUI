import { UUID } from "crypto"

export interface Review
{
    id: string,
    movieName: string,
    reviewer: string,
    comment: string
    rating: number,
    createdOn: Date,
    lastModified: Date
}