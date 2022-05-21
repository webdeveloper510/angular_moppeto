import { PaginationResponse } from "../response.I";

export interface UserResponse extends PaginationResponse {
    results: Array<User>;
}

export interface User {
    superadmin: SubUser,
    admin: SubUser,
    kids: Kid[],
    upcoming_activities: number,
    past_activities: number,
    status: string,
    code: string
}

export interface CommonProperty {
    first_name: string;
    last_name: string;
    code: string;
    username: string;
}

export interface SubUser extends CommonProperty {
    email: string;
    city: string;
    profile_image: string;
}

export interface Kid extends CommonProperty {
    age: number;
    gender: string;
    id: string;
    DOB: string;
}


export const UserStatusList = [
    { text: 'All', value: '' },
    { text: 'Active', value: 'ACTIVE' },
    { text: 'Suspended', value: 'SUSPENDED' },
]

export enum UserStatusEnum {
    All = "",
    Active = "ACTIVE",
    Suspended = "SUSPENDED"
}
