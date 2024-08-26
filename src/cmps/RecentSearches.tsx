import { SearchesContainer } from '../styles';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


interface RecentSearchesProps {
    searches: string[];
}

export function RecentSearches({ searches }: RecentSearchesProps) {
    return (
        searches.length > 0 && (
            <SearchesContainer>
                <Typography variant="h4">Recent Searches</Typography>
                <List>
                    {searches.map((city, index) => (
                        <ListItem key={index}>{city}</ListItem>
                    ))}
                </List>
            </SearchesContainer>
        )
    );
}
