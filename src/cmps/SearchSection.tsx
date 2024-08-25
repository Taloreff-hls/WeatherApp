import styled from 'styled-components';

interface SearchSectionProps {
    searchInput: string;
    setSearchInput: (value: string) => void;
    handleSearch: () => void;
}

export function SearchSection({ searchInput, setSearchInput, handleSearch }: SearchSectionProps) {
    return (
        <SearchContainer>
            <input 
                type="text" 
                placeholder="Enter city name"
                value={searchInput}
                onChange={(ev) => setSearchInput(ev.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </SearchContainer>
    );
}

const SearchContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;

    input {
        padding: 10px;
        font-size: 16px;
        flex-grow: 1;
    }

    button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
    }
`;
