import type {ReactNode} from "react";
import {SHeader, SHeaderWrapper} from "./Header.styled.ts";
import {Container} from "../Container.tsx";


type TypeHeader = {
    children: ReactNode
}


export const Header = ({children}: TypeHeader) => {

    return (
        <SHeader>
            <Container>
                <SHeaderWrapper>
                    {children}
                </SHeaderWrapper>
            </Container>
        </SHeader>
    )
}