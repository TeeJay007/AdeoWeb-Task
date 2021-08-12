import {weather} from './Weather.module.scss'
import {useState, useEffect} from 'react'

const API_URL = 'https://meteocors.herokuapp.com/weather/kaunas'

const Weather = ({className = ''}) => {
    const [weatherData, setWeatherData] = useState()

    useEffect(() => {
        fetch(API_URL, {
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(data => {
            try{
                const {forecastTimestamps} = data
                const currentWeather = forecastTimestamps.sort((a, b) => {
                    if(Math.abs(Date.now() - new Date(a.forecastTimeUtc)) === Math.abs(Date.now() - new Date(b.forecastTimeUtc)))
                        return 0
                    else if(Math.abs(Date.now() - new Date(a.forecastTimeUtc)) < Math.abs(Date.now() - new Date(b.forecastTimeUtc)))
                        return -1
                    else
                        return 1
                }).shift()

                setWeatherData(currentWeather)
            }catch(e){
                throw new Error(e)
            }
        }).catch(err => console.error(err))
    }, [])

    const WeatherIcon = ({weatherData}) => {
        if(!weatherData)
            return <img src="/sunglasses.svg" alt="" />

        const {conditionCode} = weatherData;
        if(!conditionCode)
            return <img src="/sunglasses.svg" alt="" />

        switch(conditionCode){
            case 'overcast':
            case 'light-rain':
            case 'moderate-rain':
            case 'heavy-rain':
            case 'fog':
                return <img src="/umbrella.svg" alt="umbrella" />

            case 'sleet':
            case 'light-snow':
            case 'moderate-snow':
            case 'heavy-snow':
                return <img src="/snowflake.svg" alt="snowflake" />

            case 'clear':
            case 'isolated-clouds':
            case 'scattered-clouds':
            default:
                return <img src="/sunglasses.svg" alt="sunglasses" />
        }
    }

    return (
        <div className={`${className} ${weather}`}>
            <WeatherIcon weatherData={weatherData} />
        </div>
    )
}

export default Weather