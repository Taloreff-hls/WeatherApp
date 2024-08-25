import styled from 'styled-components';
import { IWeatherData } from '../interfaces';
import { FaTemperatureLow, FaWind, FaTint } from 'react-icons/fa';

export function CurrentWeather({ weatherData }: IWeatherData) {
    return (
        <WeatherContainer>
            <h2>Current Weather</h2>
            {weatherData ? (
                <WeatherContent>
                    <LocationInfo>
                        <h3>{weatherData.location.name}</h3>
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

export const WeatherContainer = styled.div`
    flex: 1;
    width: 100%;
    padding: 20px;
    margin-top: 10px;
    color: rgb(74,111,161);
    background-color: #fff;
    border-radius: 18px;
    box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const WeatherContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const LocationInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        font-size: 24px;
        margin: 0;
    }

    p {
        font-size: 48px;
        margin: 0;
    }
`;

export const ConditionInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    p {
        font-size: 24px;
        margin: 0;
    }
`;

export const WeatherDetails = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

export const DetailItem = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 16px;

    svg {
        font-size: 20px;
        color: #4A6FA1;
    }
`;

export const WeatherIcon = styled.img`
    width: 64px;
    height: 64px;
`;
