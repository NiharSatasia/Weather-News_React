import "./current-weather.css"


const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weatherResponse.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`Weather_Icons/${data.weatherResponse.weather[0].icon}.png`} />

            </div>
            <div className="bottom" >
                <p className="temperature">{Math.round(data.weatherResponse.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Longitude </span>
                        <span className="parameter-value">{(data.weatherResponse.coord.lon)}</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Latitude</span>
                        <span className="parameter-value">{(data.weatherResponse.coord.lat)}</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like </span>
                        <span className="parameter-value">{Math.round(data.weatherResponse.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind </span>
                        <span className="parameter-value">{Math.round(data.weatherResponse.wind.speed)} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity </span>
                        <span className="parameter-value">{Math.round(data.weatherResponse.main.humidity)}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure </span>
                        <span className="parameter-value">{Math.round(data.weatherResponse.main.pressure)} hPa</span>
                    </div>
                </div >
            </div >
        </div >
    );
}

export default CurrentWeather;