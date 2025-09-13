import {Header} from "./components/Header";
import {Container} from "./components/Container.tsx";
import {MainTitle} from "./components/Title/MainTitle.tsx";

import styled from "styled-components";

export const SModalOverlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    background: rgba(79, 79, 79, 0.6);
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: start;
    z-index: 1000;
`
export const SModalWrapper = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    
    gap: 20px;
    
    width: 500px;
    height: 520px;
    
    margin-top: 111px;
`
export const SModalTitle = styled.h3`
    text-align: center;
    font-size: 24px;
    font-weight: 600;
`
export const SInputWrapper = styled.div`
    input {
        border-radius: 8px;
        border: 2px solid #DEE7F0;
        width: 100%;
        padding: 18px;

        font-size: 20px;

        ::placeholder {
            color: #2666a6;
        }
    }
`
export const SModalButton = styled.button`
    background: #1E71E8;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    border-radius: 8px;
    padding: 18px;
`


function App() {

    return (
        <>
            <Header />

            <Container>
                <MainTitle />
            </Container>
        </>
    )
}

export default App
