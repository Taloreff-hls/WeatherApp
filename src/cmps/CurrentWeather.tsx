import { IWeatherData } from '../interfaces';
import { FaTemperatureLow, FaWind, FaTint } from 'react-icons/fa';
import { ConditionInfo, DetailItem, LocationInfo, WeatherContainer, WeatherContent, WeatherDetails, WeatherIcon } from '../styles';
import Typography from '@mui/material/Typography';

const CurrentWeather: React.FC<IWeatherData> = ({ location, current }) => {
    return (
        location && (
            <WeatherContainer>
                <Typography variant="h5">Current Weather</Typography>
                <WeatherContent>
                    <LocationInfo>
                        <Typography variant="h6">{location.name}</Typography>
                        <Typography variant="h3">{current.temp_c}°C</Typography>
                    </LocationInfo>
                    <ConditionInfo>
                        <WeatherIcon src={current.condition.icon} alt="Weather icon" />
                        <Typography variant="body1">{current.condition.text}</Typography>
                    </ConditionInfo>
                    <WeatherDetails>
                        <DetailItem>
                            <FaTemperatureLow />
                            <Typography variant="body2">Feels like {current.feelslike_c}°</Typography>
                        </DetailItem>
                        <DetailItem>
                            <FaTint />
                            <Typography variant="body2">Humidity {current.humidity}%</Typography>
                        </DetailItem>
                        <DetailItem>
                            <FaWind />
                            <Typography variant="body2">Wind {current.wind_kph} kph</Typography>
                        </DetailItem>
                    </WeatherDetails>
                </WeatherContent>
            </WeatherContainer>
        )
    );
}

export default CurrentWeather;
