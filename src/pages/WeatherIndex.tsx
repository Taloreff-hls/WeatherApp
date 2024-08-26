import { useState, useEffect } from 'react';
import { fetchWeather } from '../services/weather.service';
import { SearchSection } from '../cmps/SearchSection';
import { RecentSearches } from '../cmps/RecentSearches';
import { CurrentWeather } from '../cmps/CurrentWeather';
import { LocationWeather } from '../cmps/LocationWeather';
import { PageContainer } from '../styles';
import { useQuery } from '@tanstack/react-query';
import { IWeatherData } from '../interfaces';

export function WeatherIndex() {
    const [searchInput, setSearchInput] = useState<string>("");
    const [recentSearches, setRecentSearches] = useState<string[]>([]);
    const [locationCoords, setLocationCoords] = useState<{ lat: number, lng: number } | string>("");
    const [submittedSearch, setSubmittedSearch] = useState<string>("");

    const { data: locationWeather } = useQuery<IWeatherData>(
        { 
            queryKey: ['locationWeather', locationCoords],
            queryFn: () => fetchWeather(locationCoords),
            enabled: !!locationCoords 
        }
    );

    const { data: searchedWeather } = useQuery<IWeatherData>(
        {
            queryKey: ['searchedWeather', submittedSearch],
            queryFn: () => fetchWeather(submittedSearch),
            enabled: !!submittedSearch, 
        }
    );

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocationCoords({ lat: latitude, lng: longitude });
                },
                (error) => {
                    console.error("Error occurred while fetching location:", error.message);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    const handleSearch = () => {
        if (searchInput) {
            setSubmittedSearch(searchInput);
            setRecentSearches([searchInput, ...recentSearches]);
            setSearchInput("")
        } else {
            console.error("Please enter a city name.");
        }
    };

    return (
        <PageContainer>
            <SearchSection searchInput={searchInput} setSearchInput={setSearchInput} handleSearch={handleSearch} />
            {searchedWeather && <CurrentWeather location={searchedWeather.location} current={searchedWeather.current} />}
            {locationWeather && <LocationWeather location={locationWeather.location} current={locationWeather.current} />}
            <RecentSearches searches={recentSearches} />
        </PageContainer>
    );
}
