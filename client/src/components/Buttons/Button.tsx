import type {ReactNode} from "react";
import styled from "styled-components";

type TypeButton = {
    children?: ReactNode,
    $fullWidth?: boolean,
    type?: 'submit',
    $size?: 'small' | 'medium' | 'large',
    onClick?: () => void,
}

const SDefaultButton = styled.button<TypeButton>`
    background: #1E71E8;
    color: #fff;
    border-radius: 10px;
    font-family: 'Roboto Mono', monospace;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    text-align: center;

    width: ${({$fullWidth}) => ($fullWidth ? '100%' : 'auto')};

    padding: ${({$size}) => {
        switch ($size) {
            case 'small':
                return '8px 12px';
            case 'medium':
                return '15px 20px';
            case 'large':
                return '20px 25px';
        }
    }};

    &:hover {
        background: #1e40e8;
    }

    &:active {
        background: #E9844A;
        transition: none;
    }
`

export const Button = ({children, ...rest}: TypeButton) => {

    return <SDefaultButton {...rest}>{children}</SDefaultButton>
}