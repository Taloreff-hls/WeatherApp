import styled from 'styled-components';
import { CurrentWeather } from './CurrentWeather';
import { LocationWeather } from './LocationWeather';

interface WeatherDisplayProps {
    searchedWeather: any;
    locationWeather: any;
}

export function WeatherDisplay({ searchedWeather, locationWeather }: WeatherDisplayProps) {
    return (
        <WeatherContainer>
            <CurrentWeather weatherData={searchedWeather} />
            <LocationWeather weatherData={locationWeather} />
        </WeatherContainer>
    );
}

const WeatherContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
`;
