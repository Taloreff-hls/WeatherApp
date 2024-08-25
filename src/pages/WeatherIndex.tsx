import { useState, useEffect } from 'react';

import { fetchWeather } from '../services/weather.service';
import styled from 'styled-components';

import { SearchSection } from '../cmps/SearchSection';
import { WeatherDisplay } from '../cmps/WeatherDisplay';
import { RecentSearches } from '../cmps/RecentSearches';

export function WeatherIndex() {
    const [searchInput, setSearchInput] = useState<string>("");
    const [recentSearches, setRecentSearches] = useState<string[]>([]);
    const [locationWeather, setLocationWeather] = useState<any>(null);
    const [searchedWeather, setSearchedWeather] = useState<any>(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    const weatherData = await fetchWeather({ lat: latitude, lng: longitude });
                    if (weatherData) {
                        setLocationWeather(weatherData);
                    } else {
                        console.error("Failed to get location")
                    }
                },
                (error) => {
                    console.error("Error occurred while fetching location:", error.message);
                }
            );
        } else {
            console.error("Failed to get location")
        }
    }, []);

    async function handleSearch(){
        if(searchInput){
            const weatherData = await fetchWeather(searchInput);
            if (weatherData) {
                setSearchedWeather(weatherData);
                setRecentSearches([searchInput, ...recentSearches]);
                setSearchInput("");
            } else {
                console.error("Failed to get location")
            }
        } else {
            console.error("Failed to get location")
        }
    }

    return (
        <Container>
            <SearchSection searchInput={searchInput} setSearchInput={setSearchInput} handleSearch={handleSearch} />
            <WeatherDisplay searchedWeather={searchedWeather} locationWeather={locationWeather} />
            <RecentSearches searches={recentSearches} />
        </Container>
    );
}

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
