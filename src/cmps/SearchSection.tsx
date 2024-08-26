import { ISearchSectionProps } from "../interfaces";
import { SearchButton, SearchContainer, SearchInputContainer } from "../styles";

const SearchSection: React.FC<ISearchSectionProps> = ({ searchInput, setSearchInput, handleSearch }) => {
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

export default SearchSection;

