import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App.jsx'
import Cuadricula from './Cuadricula.jsx'
import {Home} from './components/home/Home.jsx'
import { Pagina404 } from './components/SatusCode/Pagina404.jsx'
import { CriptoPage } from './components/criptoComponent/CriptoPage.jsx'
import { Perfil } from './components/perfil/Perfil.jsx'
import { UserContextProvider } from './context/userContext.jsx'
import { Login } from './components/perfil/Login.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
<UserContextProvider>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Home/>}></Route>
                <Route path="perfil" element={<Perfil />}></Route>
            </Route>

            <Route path="/criptos" element={<App />}>
                <Route index element={<Cuadricula/>}></Route>
                <Route path=":id" element={<CriptoPage />} />
            </Route>

            <Route path="/login" element={<Login />}></Route>

            <Route path="/*" element={<Pagina404/>}></Route>
        </Routes>
    </BrowserRouter>
</UserContextProvider>
)
