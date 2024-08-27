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

interface WeatherInfoProps {
    title: string;
    weatherData: IWeatherData;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ title, weatherData }) => {
    const { location, current } = weatherData;

    return (
        <WeatherContainer>
            <Typography variant="h5">{title}</Typography>
            {location && current ? (
                <WeatherContent>
                    <LocationInfo>
                        <Typography variant="h6">{location.name}, {location.country}</Typography>
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
            ) : (
                <Typography variant="body1">No location data available.</Typography>
            )}
        </WeatherContainer>
    );
};

export default WeatherInfo;
