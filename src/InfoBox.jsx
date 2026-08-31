import './InfoBox.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function weatherInfoBox({ weatherInfo }) {
    const weatherImg = {
        SUNNY_WEATHER: { URL: "https://images.unsplash.com/photo-1525490829609-d166ddb58678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VubnklMjBkYXl8ZW58MHx8MHx8fDA%3D",ICON: <SunnyIcon />},
        COLD_WEATHER: { URL: "https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",ICON:<AcUnitIcon /> },
        RAINY: { URL: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UkFJTll8ZW58MHx8MHx8fDA%3D",ICON:<ThunderstormIcon /> }
    }

    return (
        <div style={{ textAlign: "center", marginBottom: "15px" }}>
            <h3>Weather Info</h3>
            <div className="InfoBox">
                <Card sx={{ maxWidth: 354 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={weatherInfo.humidity > 80 ? weatherImg.RAINY.URL : weatherInfo.temp > 25 ? weatherImg.SUNNY_WEATHER.URL : weatherImg.COLD_WEATHER.URL}
                        title={weatherInfo.city}
                    />
                    <CardContent className='cardContent'>
                        <Typography gutterBottom variant="h5" component="div">
                            {weatherInfo.city}&nbsp;{weatherInfo.humidity > 80 ? weatherImg.RAINY.ICON : weatherInfo.temp > 25 ? weatherImg.SUNNY_WEATHER.ICON : weatherImg.COLD_WEATHER.ICON}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <p>Temperature - {weatherInfo.temp}&deg;C</p>
                            <p>Humidity - {weatherInfo.humidity}</p>
                            <p><span>Min - {weatherInfo.tempMin}&deg;C</span>&nbsp; &nbsp; &nbsp;<span>Max - {weatherInfo.tempMax}&deg;C</span></p>
                            <p>Wind Speed - {weatherInfo.windSpeed} km/hr</p>
                            <p><b>{weatherInfo.description}</b> feels like {weatherInfo.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}