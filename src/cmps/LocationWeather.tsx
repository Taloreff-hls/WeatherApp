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
} from './CurrentWeather';

export function LocationWeather({ weatherData }: IWeatherData) {
    return (
        <WeatherContainer>
            <h2>Your Location's Weather</h2>
            {weatherData ? (
                <WeatherContent>
                    <LocationInfo>
                        <h3>{weatherData.location.name}, {weatherData.location.country}</h3>
                        <p>{weatherData.current.temp_c}°C</p>
                    </LocationInfo>
                    <ConditionInfo>
                        <WeatherIcon src={weatherData.current.condition.icon} alt="Weather icon" />
                        <p>{weatherData.current.condition.text}</p>
                    </ConditionInfo>
                    <WeatherDetails>
                        <DetailItem>
                            <FaTemperatureLow />
                            <p>Feels like {weatherData.current.feelslike_c}°</p>
                        </DetailItem>
                        <DetailItem>
                            <FaTint />
                            <p>Humidity {weatherData.current.humidity}%</p>
                        </DetailItem>
                        <DetailItem>
                            <FaWind />
                            <p>Wind {weatherData.current.wind_kph} kph</p>
                        </DetailItem>
                    </WeatherDetails>
                </WeatherContent>
            ) : (
                <p>No location data available.</p>
            )}
        </WeatherContainer>
    );
}
