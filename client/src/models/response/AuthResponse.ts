import type {IUser} from "../IUser.ts";

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser
}