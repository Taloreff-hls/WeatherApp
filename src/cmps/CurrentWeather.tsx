import styled from 'styled-components';

interface CurrentWeatherProps {
    weatherData: any;
}

export function CurrentWeather({ weatherData }: CurrentWeatherProps) {
    return (
        <WeatherContainer>
            <h2>Current Weather for Searched City</h2>
            {weatherData ? (
                <div>
                    <p>{weatherData.location.name}, {weatherData.location.country}</p>
                    <p>Temperature: {weatherData.current.temp_c}°C</p>
                    <p>Condition: {weatherData.current.condition.text}</p>
                    <WeatherIcon src={weatherData.current.condition.icon} alt="Weather icon" />
                </div>
            ) : (
                <p>No location data available.</p>
            )}
        </WeatherContainer>
    );
}

const WeatherContainer = styled.div`
    flex: 1;
    padding: 20px;
    background-color: #f1f1f1;
    border-radius: 8px;
`;

const WeatherIcon = styled.img`
    width: 64px;
    height: 64px;
`;
