import { useContext } from "react"
import { UserContext } from "../../context/userContext"
import './perfil.css'

function Perfil(){
    const usuario = useContext(UserContext)

    return(
        <div>
            <h1> Perfil de {usuario.name}</h1>
            <div className="infoDataUser">
                <img src={usuario.avatar} width="100px"/>
                <small>Usuario desde: {usuario.registered}</small>
            </div>
        </div>
    )
}

export {Perfil}