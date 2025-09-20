import type {ReactNode} from "react";
import styled, {css} from "styled-components";


type TypeModal = {
    children?: ReactNode,
    closeButton?: boolean,
    $marginTop?: string,
    $position?: 'center' | 'right',
    onClose?: () => void
}


const SOverlayModal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: #4F4F4F;
    backdrop-filter: blur(7px);
    opacity: 0.6;

    width: 100%;
    height: 100vh;

    cursor: pointer;
`

const SContainer = styled.div<{ $position?: 'center' | 'right' }>`
    max-width: 1184px;
    margin: 0 auto;
    width: 100%;
    padding: 0 5px;

    ${({$position}) => {
        if ($position === 'center') {
            return css`
                    display: flex;
                    justify-content: center;
                `;
        }
    }}
`

export const SModal = styled.div<{ $marginTop?: string }>`
    position: fixed;
    z-index: 20;

    background: #fff;
    border-radius: 10px;
    padding: 20px;

    margin-top: ${({$marginTop}) => $marginTop ? $marginTop : '0'};


    input {
        border: 2px solid #DEE7F0;
        padding: 18px 20px;
        border-radius: 10px;

        width: 100%;

        &::placeholder {
            color: #DEE7F0;
        }
        

        &.error {
            border: 2px solid #dc9b9b;
        }
    }

`

const SCloseButtonWrapper = styled.div`
    background: #fff;

    margin-bottom: 20px;
    display: flex;
    justify-content: end;
    align-items: center;
`

const SCloseButtonOverlay = styled.div`
    padding: 5px;
    border-radius: 4px;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        background: #1E71E8;
    }
`

const SCloseButton = styled.div`
    background: url('./image/close-button.svg');
    width: 13px;
    height: 13px;
`

export const Modal = ({children, closeButton, onClose, $position, $marginTop}: TypeModal) => {
    return (<>
        <SOverlayModal onClick={onClose}/>
        <SContainer $position={$position}>
            <SModal $marginTop={$marginTop}>
                {closeButton && (<SCloseButtonWrapper>
                    <SCloseButtonOverlay onClick={onClose}>
                        <SCloseButton/>
                    </SCloseButtonOverlay>
                </SCloseButtonWrapper>)}

                {children}
            </SModal>
        </SContainer>
    </>)
}