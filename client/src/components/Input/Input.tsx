import styled from "styled-components";



type TypeInput = {
    type?: string,
    placeholder?: string,
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

export const Input = ({placeholder, type}: TypeInput) => {
    return <SInput type={type} placeholder={placeholder}/>
}