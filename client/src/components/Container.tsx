import styled from "styled-components";

const SContainer = styled.div`
    max-width: 1184px;
    margin: 0 auto;
    width: 100%;
    padding: 0 5px;
`

export const Container = ({children}) => {
    return <SContainer>{children}</SContainer>
}