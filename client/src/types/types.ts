export type RoleType = 'admin' | 'user' | null;
export type TokenType = string | null;
export type LogInType = (role: RoleType, token: TokenType) => void
export type LogOutType = () => void

export type AuthType = {
    role: RoleType,
    token: TokenType,
    login: LogInType,
    logout: LogOutType
}