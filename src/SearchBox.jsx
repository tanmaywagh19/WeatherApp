import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';


export default function SearchBox({updateInfo}) {

    let [city, setCity] = useState("")

    let getWeatherInfo = async ()=>{
        let res = await fetch(`${import.meta.env.VITE_API_URL}?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
        let data = await res.json();
        let weatherInfo = {
            city : data.name,
            feelsLike : data.main.feels_like,
            humidity : data.main.humidity,
            temp : data.main.temp,
            tempMax : data.main.temp_max,
            tempMin : data.main.temp_min,
            windSpeed : data.wind.speed,
            description : data.weather[0].description
        }
        return weatherInfo;
    }

    let handleChange = (event) => {
        setCity(event.target.value)
    }

    let handleSubmit = async(e) => {
        e.preventDefault();
        setCity("")
        let newInfo = await getWeatherInfo();
        await updateInfo(newInfo)
    }

    return (
        <div className='searchBox'>
            <h2>Weather Search</h2>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    )
}