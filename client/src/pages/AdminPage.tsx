import { Button } from "../components/Buttons/Button";
import {Header} from "../components/Header";
import {useContext} from "react";
import {AuthContext} from "../providers/AuthContext.tsx";


export const AdminPage = () => {
    const {logout} = useContext(AuthContext);

    return (
        <>
            <Header>
                <div>ADMIN page</div>

                <Button $size={'small'} onClick={() => logout()}> выйти </Button>
            </Header>
        </>
    )
}