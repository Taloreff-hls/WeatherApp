import { IWeatherData } from '../interfaces';
import { FaTemperatureLow, FaWind, FaTint } from 'react-icons/fa';
import { 
    WeatherContainer, 
    WeatherContent, 
    LocationInfo, 
    ConditionInfo, 
    WeatherDetails, 
    DetailItem, 
    WeatherIcon 
} from '../styles';
import Typography from '@mui/material/Typography';

export function LocationWeather({ weatherData }: IWeatherData) {
    return (
        <WeatherContainer>
            <Typography variant="h5">Your Location's Weather</Typography>
            {weatherData ? (
                <WeatherContent>
                    <LocationInfo>
                        <Typography variant="h6">{weatherData.location.name}, {weatherData.location.country}</Typography>
                        <Typography variant="h3">{weatherData.current.temp_c}°C</Typography>
                    </LocationInfo>
                    <ConditionInfo>
                        <WeatherIcon src={weatherData.current.condition.icon} alt="Weather icon" />
                        <Typography variant="body1">{weatherData.current.condition.text}</Typography>
                    </ConditionInfo>
                    <WeatherDetails>
                        <DetailItem>
                            <FaTemperatureLow />
                            <Typography variant="body2">Feels like {weatherData.current.feelslike_c}°</Typography>
                        </DetailItem>
                        <DetailItem>
                            <FaTint />
                            <Typography variant="body2">Humidity {weatherData.current.humidity}%</Typography>
                        </DetailItem>
                        <DetailItem>
                            <FaWind />
                            <Typography variant="body2">Wind {weatherData.current.wind_kph} kph</Typography>
                        </DetailItem>
                    </WeatherDetails>
                </WeatherContent>
            ) : (
                <Typography variant="body1">No location data available.</Typography>
            )}
        </WeatherContainer>
    );
}
