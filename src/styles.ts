import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const PageContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #E6F8FB, #93E1F1);
`;

export const WeatherContainer = styled.div`
    flex: 1;
    width: 100%;
    padding: 20px;
    margin-top: 10px;
    color: rgb(74,111,161);
    background-color: #fff;
    border-radius: 18px;
    box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const WeatherContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const LocationInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        font-size: 24px;
        margin: 0;
    }

    p {
        font-size: 48px;
        margin: 0;
    }
`;

export const ConditionInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    p {
        font-size: 24px;
        margin: 0;
    }
`;

export const WeatherDetails = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

export const DetailItem = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 16px;

    svg {
        font-size: 20px;
        color: #4A6FA1;
    }
`;

export const WeatherIcon = styled.img`
    width: 64px;
    height: 64px;
`;

export const SearchesContainer = styled.div`
    margin-top: 20px;
    color: rgb(74,111,161);
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

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

export const SearchInputContainer = styled.div`
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

export const SearchButton = styled(FaSearch)`
    position: absolute;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    color: #93E1F1;
    font-size: 18px;
`;
