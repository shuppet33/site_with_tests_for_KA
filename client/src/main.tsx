import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './styles/reset.css'
import './styles/base.css'
import {AuthProvider} from "./providers/AuthProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
       <AuthProvider>
           <App />
       </AuthProvider>
    </StrictMode>
    ,
)
