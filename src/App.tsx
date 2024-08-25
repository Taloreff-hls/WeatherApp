import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WeatherIndex } from './pages/WeatherIndex';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <WeatherIndex />
        </QueryClientProvider>
    );
}

export default App;
