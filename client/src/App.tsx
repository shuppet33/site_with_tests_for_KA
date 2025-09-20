import {LoginPage} from "./pages/LoginPage.tsx";
import {useContext} from "react";
import {AuthContext} from "./providers/AuthContext.tsx";
import {AdminPage} from "./pages/AdminPage.tsx";



function App() {
    const {role} = useContext(AuthContext);

    if (role === 'admin') {
        return <AdminPage />
    }

    return (
        <>
            <LoginPage/>
        </>
    )
}

export default App
