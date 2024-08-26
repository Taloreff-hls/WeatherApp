import { SearchButton, SearchContainer, SearchInputContainer } from "../styles";

interface SearchSectionProps {
    searchInput: string;
    setSearchInput: (value: string) => void;
    handleSearch: () => void;
}

export function SearchSection({ searchInput, setSearchInput, handleSearch }: SearchSectionProps) {
    return (
        <SearchContainer>
            <SearchInputContainer>
                <input 
                    type="text" 
                    placeholder="Enter city name"
                    value={searchInput}
                    onChange={(ev) => setSearchInput(ev.target.value)}
                />
                <SearchButton onClick={handleSearch} />
            </SearchInputContainer>
        </SearchContainer>
    );
}

