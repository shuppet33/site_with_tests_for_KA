import $api from "../http";
import type {AxiosResponse} from 'axios';
import type {AuthResponse} from "../models/response/AuthResponse.ts";

const login = async (username: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
    return $api.post<AuthResponse>('/login', {username, password})
}

const registration = async (username: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
    return $api.post<AuthResponse>('/registration', {username, password})
}

const logout = async (): Promise<any> => {
    return $api.post<AuthResponse>('/logout')
}
