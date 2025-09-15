import type {FieldValues} from "react-hook-form";


export const login = (data: FieldValues) => {
    if (data?.login === 'admin' && data?.password === '1234') {
        return {success: true, role: 'admin', token: 'abcd'}
    }

    return {success: false}
}