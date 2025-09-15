import styled from "styled-components";


export const SHeader = styled.div`
    height: 60px;
    width: 100%;
    background: #fff;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`
export const SHeaderWrapper = styled.div`
    padding: 10px 0;
    gap: 10px;
    display: flex;
    justify-content: end;
    align-items: center;
`



export const SModalWrapper = styled.div`
    display: flex;
    justify-content: center;
    
    margin: 0 20px 40px 20px;
`

export const SModalContent = styled.div`
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        width: 360px;   
    }
`

export const STitle = styled.h3`
    font-size: 24px;
    font-weight: 600;
    color: #05203E;
`