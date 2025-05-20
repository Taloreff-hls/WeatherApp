export interface Condition {
    text: string;
    icon: string;
}

export interface CurrentWeatherData {
    temp_c: number;
    feelslike_c: number;
    humidity: number;
    wind_kph: number;
    condition: Condition;
}

export interface Location {
    name: string;
    country: string;
}

export interface IWeatherData {
    location: Location;
    current: CurrentWeatherData;
}

export interface ISearchesListProps {
    searches: string[];
}

export interface ISearchSectionProps {
    searchInput: string;
    setSearchInput: (value: string) => void;
    handleSearch: () => void;
}