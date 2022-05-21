import { PaginationResponse } from "../response.I";

export interface ReviewsResponse extends PaginationResponse {
    results: Array<review>;
    stars: any;
}

export interface review {
    id: string;
    review: string;
    ratings: string;
    response: string;
    activity: string;
    status: string;
    review_date: string;
    vendor_name: string;
    vendor_code: string;
    country: string;
    activity_title: string;
    activity_code: string;
    user_name: string;
    user_id: string;
}