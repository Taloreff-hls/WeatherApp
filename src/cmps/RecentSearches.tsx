import { SearchesContainer, RecentSearch } from '../styles';
import Typography from '@mui/material/Typography';

interface RecentSearchesProps {
    searches: string[];
}

export function RecentSearches({ searches }: RecentSearchesProps) {
    return (
        searches.length > 0 && (
            <SearchesContainer>
                <Typography variant="h4">Recent Searches</Typography>
                <RecentSearch>
                    {searches.map((city, index) => (
                        <li key={index}>{city}</li>
                    ))}
                </RecentSearch>
            </SearchesContainer>
        )
    );
}
