import * as React from "react";
import styled from "styled-components";






type TypeInput = {
    type?: string,
    placeholder?: string,
    value?: string,
    className?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}
const SInput = styled.input`
    border: 2px solid #DEE7F0;
    padding: 18px 20px;
    border-radius: 10px;
    
    width: 100%;
    
    &::placeholder {
        color: #DEE7F0;
    }
`

export const Input = ({className, placeholder, type, value, onChange}: TypeInput) => {
    return <SInput className={className}
                   value={value}
                   onChange={onChange}
                   autoComplete={'off'}
                   type={type}
                   placeholder={placeholder}
    />
}