import axios from "axios";
import type {FieldValues} from "react-hook-form";
import type {RoleType, TokenType} from "../types/types.ts";


type LoginResponse = {
    success: boolean;
    role: RoleType | null;
    token: TokenType | null;
};

// вынести типы


export const loginAPI = async (data: FieldValues): Promise<LoginResponse> => {
    try {
        const res = await axios.post("http://localhost:8080/auth/login", {
            login: data.login,
            password: data.password,
        });

        return {
            success: true,
            role: res.data.role,
            token: res.data.token,
        };
    } catch (e) {
        console.error("Ошибка запроса:", e);
        return { success: false, role: null, token: null };
    }
};