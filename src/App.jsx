import { useEffect, useState } from 'react'
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


  const listCriptos = () => {
    return criptos.map(({id,name,priceUsd}) => (
      <li key={id}>
        <br /><br />
        <strong>Nombre:</strong> {name} <br />
        <strong>Precio:</strong> {Number(priceUsd).toFixed(2)}
        <br /><br />
      </li>
    ))
  }


  if(!criptos){
    return <div>Cargando...</div>
  }

  return (
    <>
      <h1>Lista de Criptomonedas</h1>
      <ul>
        {listCriptos()}
      </ul>
    </>
  )

}

export default App
