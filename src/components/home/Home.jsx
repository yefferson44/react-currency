import { Link } from "react-router-dom"
import './home.css'

function Home(){
    return (
        <> 
            <h1>Hola, Bienvenido a EDMarket</h1>
            <p>Cónoce las 100 criptos más ousadas</p>
            <Link to="criptos"> Ver Criptomonedas</Link>
        </>
    )
}

export {Home}