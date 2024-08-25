import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

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

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

const SearchInputContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;

    input {
        width: 100%;
        padding: 10px 30px;
        font-size: 18px;
        border-radius: 25px;
        border: none;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        color: rgb(74,111,161);

        &::placeholder {
            color: rgb(74,111,161);
        }

        &:focus {
            outline: 1px solid rgba(74,111,161,0.4);
        }
    }
`;

const SearchButton = styled(FaSearch)`
    position: absolute;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    color: #93E1F1;
    font-size: 18px;
`;
