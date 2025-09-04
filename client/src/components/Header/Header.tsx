import {SHeader, SHeaderButton, SHeaderWrapper} from "./Header.styled.ts";
import {Container} from "../Container.tsx";


export const Header = ({children}) => {
    return(
        <>
            <SHeader>
                <Container>
                    <SHeaderWrapper>
                        <SHeaderButton>Войти</SHeaderButton>
                    </SHeaderWrapper>
                </Container>
            </SHeader>

            {children}
        </>
    )
}