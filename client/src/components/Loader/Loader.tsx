import styled, {keyframes} from "styled-components";


const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const SLoaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
`

const SLoaderOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: #000000;
    backdrop-filter: blur(7px);
    opacity: 0.6;

    width: 100%;
    height: 100vh;

    z-index: 30;
`

const SLoader = styled.span`
    width: 50px;
    height: 50px;
    border: 6px solid #1e71e8;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${rotation} 1s linear infinite;

    z-index: 31;
`

export function Loader() {
    return (
        <>
            <SLoader/>
        </>
    )
}