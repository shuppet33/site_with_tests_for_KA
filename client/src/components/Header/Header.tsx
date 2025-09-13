import type {ReactNode} from "react";
import {useState} from "react";
import {SHeader, SHeaderWrapper, SModalContent, SModalWrapper, STitle} from "./Header.styled.ts";
import {Container} from "../Container.tsx";
import {Modal} from "../Modals/Modal.tsx";
import {Button} from "../Buttons/Button.tsx";
import {Input} from "../Input/Input.tsx";


type TypeHeader = {
    children: ReactNode
}


export const Header = ({children}: TypeHeader) => {

    const [isOpen, setIsOpen] = useState(true)

    return (
        <>
            {isOpen && (
                <Modal closeButton
                       onClose={() => setIsOpen(false)}
                       $marginTop={'110px'}
                       $position={'center'}
                >
                    <SModalWrapper>
                        <SModalContent>
                            <STitle>Вход</STitle>

                            <Input placeholder={'Логин'}/>
                            <Input type={'password'} placeholder={'Пароль'}/>

                            <Button $fullWidth $size={'medium'}>войти</Button>
                        </SModalContent>
                    </SModalWrapper>
                </Modal>
            )}

            <SHeader>
                <Container>
                    <SHeaderWrapper>
                        <Button onClick={() => setIsOpen(true)} $size={'small'}>войти</Button>
                    </SHeaderWrapper>
                </Container>
            </SHeader>

            {children}
        </>
    )
}