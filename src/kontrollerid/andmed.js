
async function loeAndmed(lat, long) {
    const paringUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
    const response = await fetch(paringUrl)
    const andmed = await response.json()
    console.log(andmed.current_weather)
    return andmed.current_weather
}

export { loeAndmed }