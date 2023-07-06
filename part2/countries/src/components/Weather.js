const Weather = ({weather}) => {
    if (weather) {
        return (
            <div>
                <p>temperature {weather.temp}</p>
                <img src={weather.icon} alt={weather.icon}></img>
                <p>wind {weather.wind}m/s</p>
            </div>
        )
    }
}

export default Weather