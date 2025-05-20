import { SearchesContainer } from '../styles';
import Typography from '@mui/material/Typography';
import BasicList from './BasicList';
import { ISearchesListProps } from '../interfaces';

const RecentSearches: React.FC<ISearchesListProps> = ({ searches }) => {
    return (
        searches.length > 0 && (
            <SearchesContainer>
                <Typography variant="h4">Recent Searches</Typography>
                <BasicList searches={searches}/>
            </SearchesContainer>
        )
    );
}

export default RecentSearches;