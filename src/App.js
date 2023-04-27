import './App.css';
import { useEffect, useState} from 'react';
import Asukohad from './Asukohad';
import AsukohadDetailid from './AsukohadDetailid';
import { loeAndmed } from './kontrollerid/andmed.js'
import LisaAsukoht from './LisaAsukoht';


function App() {
  const [aktiivne, setAktiivne] = useState(0)
  const [asukohad, setAsukohad] = useState([ //reaktiivne massiiv asukoha andmetega
    {
      nimi: "Tallinn",
      lat: 59.497,
      long: 24.7536,
      andmed: null
    },
    {
      nimi: "Tartu",
      lat: 59.378,
      long: 26.729,
      andmed: null
    },
    {
      nimi: "Pärnu",
      lat: 58.23,
      long: 23.30,
      andmed: null
    }
  ])

  const lisaKoht = (nimi, lat, long) => {
    const uusKoht = {
      nimi: nimi,
      lat: lat,
      long: long,
      andmed: null
    };
    
    const uusMassiiv = [...asukohad, uusKoht]
    setAsukohad(uusMassiiv)
  }

  useEffect(() => {
    
    muudaAktiivset(1);
  }, [])

  const asendaIlmaAndmed = (asukohaIndex, ilmaAndmed) => {
    const uuedAndmed = asukohad.map((asukoht, index) => {
      if (index !== asukohaIndex) {
        return asukoht;
      }
      
      const ilm = {
        temperatuur: ilmaAndmed.temperature,
        aeg: ilmaAndmed.time,
        ilmakood: ilmaAndmed.weathercode,
        tuuleKiirus: ilmaAndmed.windspeed,
        kasPaev: ilmaAndmed.is_day,
        tuuleSuund: ilmaAndmed.winddirection
      }

      return {...asukoht, andmed: ilm}

    })

    setAsukohad(uuedAndmed)
  }

  const muudaAktiivset = async (uusAktiivneIndeks) => {
    setAktiivne(uusAktiivneIndeks)
    const ilmaAndmed = await loeAndmed(
      asukohad[uusAktiivneIndeks].lat,
      asukohad[uusAktiivneIndeks].long
      )
    asendaIlmaAndmed(uusAktiivneIndeks, ilmaAndmed)
  }
  return (
    <>
    <div className="container-fluid p-5 bg-primary text-white text-center">
      <h1>Ilmajaam</h1>
    </div>
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-sm-5">
          <Asukohad 
          asukohad={asukohad}
          muudaAktiivset={muudaAktiivset} />
          <LisaAsukoht
            lisaKoht={lisaKoht}
          />
        </div>
        <div className="col-12 col-sm-7">
          <AsukohadDetailid asukoht={asukohad[aktiivne]} />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
