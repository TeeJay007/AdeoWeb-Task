import {weather} from './Weather.module.scss'

const Weather = ({className}) => {
    return (
        <div className={`${className} ${weather}`}>
            <img src="/umbrella.svg" alt="" />
        </div>
    )
}

export default Weather