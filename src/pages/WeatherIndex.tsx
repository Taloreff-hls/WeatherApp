import React, { useState } from 'react';
import { fetchWeather } from '../services/weather.service';
import { SearchSection } from '../cmps/SearchSection';
import { WeatherDisplay } from '../cmps/WeatherDisplay';
import { RecentSearches } from '../cmps/RecentSearches';
import styled from 'styled-components';

export function WeatherIndex() {
    const [searchInput, setSearchInput] = useState<string>("");
    const [recentSearches, setRecentSearches] = useState<string[]>([]);
    const [searchedWeather, setSearchedWeather] = useState<any>(null);

    async function handleSearch(){
        if(searchInput){
            const weatherData = await fetchWeather(searchInput);
            if (weatherData) {
                setSearchedWeather(weatherData);
                setRecentSearches([searchInput, ...recentSearches]);
                setSearchInput("");
            } else {
                console.error("failed to fetch location")
            }
        } else {
            console.error("failed to fetch location")
        }
    }

    return (
        <Container>
            <SearchSection searchInput={searchInput} setSearchInput={setSearchInput} handleSearch={handleSearch} />
            <WeatherDisplay searchedWeather={searchedWeather} />
            <RecentSearches searches={recentSearches} />
        </Container>
    );
}

// Styled components
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
