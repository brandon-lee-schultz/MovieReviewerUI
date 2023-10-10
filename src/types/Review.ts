export type Review =
{
    id: string,
    movieName: string,
    userId?: string,
    reviewer: string,
    comment: string
    rating: number,
    createdOn: string,
    lastModified: string
}