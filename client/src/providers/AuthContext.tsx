import {createContext} from "react";
import type {AuthType} from "../types/types.ts";


export const AuthContext = createContext<AuthType>(
    {
        role: null,
        token: null,
        login: () => {},
        logout: () => {},
    }
)