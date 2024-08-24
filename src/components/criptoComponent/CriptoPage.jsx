import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import './criptoPage.css'
import { usePetition } from '../../hooks/usePetition'
import { CardCriptos } from '../criptoInfos/CardCriptos'


function CriptoPage(){
    //obtenemos los parametos de la url
    const param = useParams()

    const datacriptos = usePetition(param.id)
    const history = usePetition(`${param.id}/history?interval=d1`)
    const [xhistory, setXhistory] = useState([])

    const getHistory =  () => {
        if(!history) return <p>No hay datos históricos disponibles</p>;

        const dataHistory = xhistory.length > 0 ? xhistory.reverse() : history.reverse()

        return dataHistory.map(({priceUsd,time},index) => {
            if (!priceUsd || !time) return null;

            const formatFecha = new Date(time)
            const ano = formatFecha.getFullYear();
            const mes = formatFecha.getMonth() + 1; // Los meses en JavaScript son 0-indexados, por eso se suma 1
            const día = formatFecha.getDate();
            const hora = formatFecha.getHours();
            const minutos = formatFecha.getMinutes();
            const segundos = formatFecha.getSeconds();
            const fecha = `${ano}-${mes.toString().padStart(2, '0')}-${día.toString().padStart(2, '0')} ${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`
            
            return (
                <div className='visorHistory' key={`${time}-${index}`}>
                    <p>Precio: ${Number(priceUsd).toFixed(2)}</p>
                    <p>Fecha: {fecha}</p>
                </div>
            )
        })
    }

    const changeTimeHistory = (e) => {
        const API_ASSETS = import.meta.env.VITE_API_URL_CIPTO

        axios.get(`${API_ASSETS}${param.id}/history?interval=${e.target.value}`)
        .then(data => {
            setXhistory(data.data.data)
        })
        .catch(() => console.error('La peticion fallo.'))
    }

    if(!datacriptos){
        return <h2 className="carga">Cargando...</h2>
    }

    return(
        <div className="visorCripto" key={`${datacriptos.id}`}>

            <CardCriptos datacriptos={datacriptos} />

            <div className="history" key={`history`}>
                <h1>Historial de movimientos {datacriptos.name} - {datacriptos.symbol}</h1>
                <select  onChange={changeTimeHistory}>
                    <option value="0" key="0">Select time history</option>
                    <option value={'m1'} key={'m1'} >m1</option>
                    <option value={'m5'} key={'m5'}>m5</option>
                    <option value={'m15'} key={'m15'}>m15</option>
                    <option value={'m30'} key={'m30'}>m30</option>
                    <option value={'h1'} key={'h1'}>h1</option>
                    <option value={'h2'} key={'h2'}>h2</option>
                    <option value={'h6'} key={'h6'}>h6</option>
                    <option value={'h12'} key={'h12'}>h12</option>
                    <option value={'d1'} key={'d1'}>d1</option>
                </select>
                {getHistory()}
            </div>
        </div>
    )
}

export {CriptoPage}