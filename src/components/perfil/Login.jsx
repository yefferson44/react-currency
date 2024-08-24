import { useState } from 'react'
import './login.css'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

function Login(){
    const navigation = useNavigate()

    const [user, setUser] = useState({
        email:"",
        password:""
    })

    const [cargando, setCargando] = useState(false)

    const [error, setError] = useState()

    const observeEmail = (e) => {
        setUser({
            ...user,
            email:e.target.value
        })
    }

    const observePassword = (e) => {
        setUser({
            ...user,
            password:e.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        setError(null)
        setCargando(true)
        console.log(user)
        localStorage.setItem('dataUser', user.email)
        axios.post('https://reqres.in/api/login',user)
        .then(data => {
            localStorage.setItem('tokenEdMarket',data.data.token)
            setCargando(false)
            navigation("/")
        })
        .catch(e => {
            setCargando(false)
            console.error(e)
            setError(e)
        })
    }

    if(localStorage.getItem('tokenEdMarket')){
        return <Navigate to="/" />
    }

    return(
        <div className="login-container">
            <h1>Iniciar Sesión</h1>
            <form onSubmit={e => submitForm(e)}>
                <div className="field">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input onChange={e => observeEmail(e)} type="email" name="email"  required />
                </div>

                <div className="field">
                    <label htmlFor="password">Contraseña</label>
                    <input onChange={e => observePassword(e)} type="password" name="password" autoComplete='false' required />
                </div>

                <div className="submit">
                    <input type="submit" value={cargando ? 'Cargando...':'Ingresar'} className='link'/>
                </div>
            </form> 
            {
                error && <small className='error'>{error.response.data.error}</small>
            }
        </div>
    )
}

export {Login}