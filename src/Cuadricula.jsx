import { useEffect, useState } from 'react'
import { CriptoList } from './components/criptoComponent/CriptoList'
import './Cuadricula.css'

import axios from 'axios'

function App() {
  const [criptos, setCriptos] = useState()

  const API_ASSETS = import.meta.env.VITE_API_URL 

  useEffect(() => {
    axios.get(`${API_ASSETS}/assets`)
    .then(data => {
      setCriptos(data.data.data)
    })
    .catch(() => console.error('La peticion fallo.'))
  },[])


  if(!criptos){
    return <h2 className="carga">Cargando...</h2>
  }

  return (
    <>
      <h1>Lista de Criptomonedas</h1>
      <CriptoList criptoApi={criptos}/>
    </>
  )

}

export default App
