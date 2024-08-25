import { IWeatherData } from '../interfaces';
import { FaTemperatureLow, FaWind, FaTint } from 'react-icons/fa';
import { ConditionInfo, DetailItem, LocationInfo, WeatherContainer, WeatherContent, WeatherDetails, WeatherIcon } from '../styles';
import Typography from '@mui/material/Typography';

export function CurrentWeather({ weatherData }: IWeatherData) {

    return (
        weatherData && <WeatherContainer>
            <Typography variant="h5">Current Weather</Typography>
            <WeatherContent>
                <LocationInfo>
                    <Typography variant="h6">{weatherData.location.name}</Typography>
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
        </WeatherContainer>
    );
}
