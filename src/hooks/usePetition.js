import { useEffect, useState } from 'react'
import axios from 'axios'

function usePetition(endpoint){

    const API_ASSETS = import.meta.env.VITE_API_URL_CIPTO

    const [data, setData] = useState()
    
    useEffect(() => {
        axios.get(`${API_ASSETS}${endpoint}`)
        .then(data => {
            setData(data.data.data)
        })
        .catch(() => console.error('La peticion fallo.'))
    },[])

    return data
}

export { usePetition }