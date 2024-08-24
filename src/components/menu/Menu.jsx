import { useContext } from 'react'
import './menu.css'
import {useNavigate, NavLink, Link } from 'react-router-dom' //NavLink para menus principales
import { UserContext } from '../../context/userContext'

function Menu(){
    const navigation = useNavigate()

    const usuario = useContext(UserContext)

    const logout = () => {
        localStorage.removeItem('tokenEdMarket')
        localStorage.removeItem('dataUser')
        navigation('/login')
    }

    return(
        <>
            <nav className="main-menu">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/criptos">Criptos</NavLink></li>
                    <li><NavLink to="/perfil">Perfil {usuario.name}</NavLink></li>
                    <li><a onClick={() => logout()}>Cerrar Sesión</a></li>
                </ul>
            </nav>
        </>
    )
}

export {Menu}