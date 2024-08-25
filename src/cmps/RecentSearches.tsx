import { SearchesContainer } from '../styles';

interface RecentSearchesProps {
    searches: string[];
}

export function RecentSearches({ searches }: RecentSearchesProps) {
    return (
        searches.length > 0 && <SearchesContainer>
            <h3>Recent Searches</h3>
            <ul>
                {searches.map((city, index) => (
                    <li key={index}>{city}</li>
                ))}
            </ul>
        </SearchesContainer>
    );
}

