import {useState} from "react";
import {LoginPage} from "./pages/LoginPage.tsx";
import {UserPage} from "./pages/UserPage.tsx";
import {AdminPage} from "./pages/AdminPage.tsx";
import {Navigate, Route, Routes} from "react-router-dom";


type RoleType = null | 'admin' | 'user'

function App() {

    const [role, setRole] = useState<RoleType>(null)

    return (
        <>
            <Routes>
                <Route path={'/login'} element={<LoginPage />}/>
                <Route path={'/admin'} element={ role === 'admin' ? <AdminPage /> : <Navigate to={'/login'} />} />
                <Route path={'/user'} element={role === 'user' ? <UserPage /> : <Navigate to={'/login'} />} />
            </Routes>
        </>
    )
}

export default App
