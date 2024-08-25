import styled from 'styled-components';

interface RecentSearchesProps {
    searches: string[];
}

export function RecentSearches({ searches }: RecentSearchesProps) {
    return (
        <SearchesContainer>
            <h3>Recent Searches</h3>
            <ul>
                {searches.map((city, index) => (
                    <li key={index}>{city}</li>
                ))}
            </ul>
        </SearchesContainer>
    );
}

const SearchesContainer = styled.div`
    margin-top: 20px;
    ul {
        list-style-type: none;
        padding: 0;
        li {
            background-color: #f9f9f9;
            padding: 10px;
            margin-bottom: 5px;
            border-radius: 4px;
        }
    }
`;
