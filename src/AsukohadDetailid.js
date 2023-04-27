function AsukohadDetailid ({asukoht}) {
    if (asukoht.andmed == null) {
        return <h3>Laen andmeid...</h3>
    }
    
    return (
        <>
        
        <h2>Tänane ilm linnas: {asukoht.nimi}</h2>
        <div>
            <p>Aeg on: {asukoht.andmed.aeg} </p>
            <p>Temp on: {asukoht.andmed.temperatuur} </p>
            <p>Tuule kiirus on: {asukoht.andmed.tuuleKiirus} </p>
            <p>Päev on: {asukoht.andmed.kasPaev}</p>
            <p>Tuule suund on: {asukoht.andmed.tuuleSuund} </p>
        </div>
        </>
    )
}

export default AsukohadDetailid;