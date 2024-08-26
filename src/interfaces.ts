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

export interface WeatherData {
    location: Location;
    current: CurrentWeatherData;
}

export interface IWeatherData {
    weatherData: WeatherData | null;
}
