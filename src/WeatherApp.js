import React, {useState} from 'react'
import axios from 'axios'
import "./styles/weatherApp.css"

export default function WeatherApp() {

    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    const [active, setActive] = useState(false)

    const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6e51e152cd8313fefb1a030ee73159df&units=metric&lang=de`
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
            })
            .catch(function (error) {
                if (error.response) {
                    alert("Keine gültige Stadt eingegeben!");       
                }
            });
            setLocation('');
            setActive(true);
        } 
    } 

    return (
        <div className='weather-wrapping'>
            <div className='weather-card'>
                <div className='weather-input'>
                        <input
                            value={location}
                            placeholder="Stadt einfügen"
                            onChange={event => setLocation(event.target.value)}
                            onKeyPress={searchLocation}
                            type="text"
                        /> 
                    </div>
                <div className='upper-bar'>
                    <div className='set-windows'>
                        <p>Gefühlt</p>
                        {data.main ? <h2>{(data.main.feels_like).toFixed()}°C</h2> : null}
                    </div>
                    <div className='set-windows'>
                        <p>Feuchtigkeit</p>
                        {data.main ? <h2>{data.main.humidity}%</h2> : null}
                    </div>
                </div>
                <div className='data-cards'>
                    <div className={active ? 'opening-windows': null}>
                            <h1 className='location'>{data.name}</h1>
                            <div className='temperature-condition'>
                                <div>
                                    {data.main ? <h1>{(data.main.temp).toFixed()}°C</h1> : null}
                                </div>
                                <div>
                                    {data.weather ? <h2>{data.weather[0].description}</h2> : null}
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
