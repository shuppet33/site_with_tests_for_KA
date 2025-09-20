import * as React from "react";
import styled from "styled-components";


type TypeInput = {
    type?: string,
    placeholder?: string,
    value?: string,
    className?: string,
    error?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const SInputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;
`

const SInput = styled.input`
    border: 2px solid #DEE7F0;
    padding: 18px 20px;
    border-radius: 10px;

    width: 100%;

    &::placeholder {
        color: #DEE7F0;
    }
`

const SErrorText = styled.div`
    color: #EA6161;
    font-size: 12px;
    
    margin-left: 3px;
`

export const Input = ({className, placeholder, type, value, onChange, error}: TypeInput) => {
    return (
        <SInputWrapper>
            <SInput className={className}
                    value={value}
                    onChange={onChange}
                    autoComplete={'off'}
                    type={type}
                    placeholder={placeholder}
            />
            <SErrorText>{error}</SErrorText>
        </SInputWrapper>
    )
}