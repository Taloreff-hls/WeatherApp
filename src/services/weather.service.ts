import axios from 'axios';

const apiKey = '97a23f45325c43018d092409242508';

export const fetchWeather = async (query: string | { lat: number; lng: number }) => {
    try {
        let response;
        if (typeof query === 'string') {
            response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`);
        } else {
            const { lat, lng } = query;
            response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lng}`);
        }
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
};
