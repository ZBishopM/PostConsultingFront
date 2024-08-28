import { User } from "./User";

export interface Post {
    id?:number;
    title: string;
    description: string;
    postedDateFormatted?: string;
    countLikes?: number;
    countComments?: number;
    user?: User;
}