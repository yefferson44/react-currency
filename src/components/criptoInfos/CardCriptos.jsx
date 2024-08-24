function CardCriptos({datacriptos}){
    const statusVariation = (changePercent24Hr) => {
        const variation = Number(changePercent24Hr).toFixed(2)
        let status = ''

        if(variation > 0){
            status = 'positive'
        }else{
            status = 'negative'
        }
        return status
    }

    return(
        <div className="tableInfo">
            <h3>Nombre de la criptomoneda: {datacriptos.name} - {datacriptos.symbol}</h3>
            <p>Puesto de popularidad: {datacriptos.rank} </p>
            <p>precio usd: ${Number(datacriptos.priceUsd).toFixed(2)}</p>
            <p>Variacion en las ultimas 24h: <span className={statusVariation(datacriptos.changePercent24Hr)}> {Number(datacriptos.changePercent24Hr).toFixed(2)} </span></p>
        </div>
    )
}

export {CardCriptos}