import * as React from "react";
import {useEffect, useState} from "react";
import {AuthContext} from "./AuthContext.tsx";
import type {RoleType, TokenType} from "../types/types.ts";



export function AuthProvider ({children}: {children: React.ReactNode}) {

    const [role, setRole] = useState<RoleType>(null)
    const [token, setToken] = useState<TokenType>(null)

    useEffect(() => {
        let authParse =  localStorage.getItem('auth')
            ? JSON.parse(localStorage.auth)
            : null

        if (authParse?.role && authParse?.token) {
            setRole(authParse.role)
            setToken(authParse.token)
        }
    }, [])


    const login = (role: RoleType, token: TokenType) => {
        setRole(role)
        setToken(token)
    }

    console.log('role and token', {role, token})

    const logout = () => {
        setRole(null)
        setToken(null)
        localStorage.removeItem('auth')
    }

    return (
        <AuthContext.Provider value={{role, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}