import { useState } from "react";

function LisaAsukoht({lisaKoht}) {
    const [nimetus, setNimetus] = useState("")
    const [lat, setLat] = useState(0.0)
    const [long, setLong] = useState(0.0)
    
    const andmeteLisamine = (event) => {
        event.preventDefault()
        lisaKoht(nimetus, lat, long)
        setNimetus("")
        setLat(0)
        setLong(0)

    }

    return (
        <form onSubmit={andmeteLisamine}>
            <div className="row">
                <label>Nimi</label>
                <input type="text" 
                value={nimetus}
                onChange={({target}) => setNimetus(target.value)} />
            </div>
            <div className="row">
                <label>Pikkuskraad</label>
                <input type="text"
                    value={lat}
                    onChange={({target}) => setLat(target.value)} />
        
            </div>
            <div className="row">
                <label>Laiuskraad</label>
                <input type="text" 
                  value={long}
                  onChange={({target}) => setLong(target.value)}
                />
                <input className="btn-primary" type="submit" value='Lisa' />   
            </div>   
        </form>
    )    
}

export default LisaAsukoht;