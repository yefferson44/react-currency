import './Grid.css'

function CriptoList({criptoApi}){

    const getCriptosLi = () => {
        return criptoApi.map(({id,name,priceUsd,changePercent24Hr}) => {
            return (
                <div className="row" key={id}>
                    <span>
                        {name} <br />
                        <small className={statusVariation(changePercent24Hr)}>variation 24h: {Number(changePercent24Hr).toFixed(2)}</small>
                    </span>
                    <span>${Number(priceUsd).toFixed(2)}</span>
                </div>
            )
        })
    }

    const statusVariation = (changePercent24Hr) => {
        const variation = Number(changePercent24Hr).toFixed()
        let status = ''

        if(variation > 0){
            status = 'positive'
        }else{
            status = 'negative'
        }
        return status
    }

    return (
        <div className="visorGrid">
            <div className="column">
                <span>Cript Name</span>
                <span>Price USD</span>
            </div>
            { getCriptosLi() }
        </div>
    )

}

export { CriptoList }