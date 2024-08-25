import styled from 'styled-components';
import { CurrentWeather } from './CurrentWeather';

interface WeatherDisplayProps {
    searchedWeather: any;
}

export function WeatherDisplay({ searchedWeather }: WeatherDisplayProps) {
    return (
        <WeatherContainer>
            <CurrentWeather weatherData={searchedWeather} />
        </WeatherContainer>
    );
}

const WeatherContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
`;
