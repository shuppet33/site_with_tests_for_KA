import styled from "styled-components";
import type {ReactNode} from "react";

type TypeContainer = {
    children: ReactNode,
}



const SContainer = styled.div`
    max-width: 1184px;
    margin: 0 auto;
    width: 100%;
    padding: 0 5px;
`

export const Container = ({children}: TypeContainer) => {
    return <SContainer>{children}</SContainer>
}