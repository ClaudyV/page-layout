import { User } from "./user.interface";

export interface UserAll {
    data: User,
    page: number,
    pageSize: number,
    total: number,
    totalPages: number
}