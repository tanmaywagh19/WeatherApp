import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import './WeatherApp.css'

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Pune",
        feelsLike: 23.24,
        humidity: 78,
        temp: 22.86,
        tempMax: 23.56,
        tempMin: 22.86,
        windSpeed: 4.31,
        description: "broken clouds"
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }

    return (
        <div className="WeatherApp">
            <div className="Weather">
                <h1 style={{ textAlign: "center" }}>Weather App</h1>
                <SearchBox updateInfo={updateInfo} />
                <InfoBox weatherInfo={weatherInfo} />
            </div>
        </div>
    )
}