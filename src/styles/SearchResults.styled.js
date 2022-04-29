import styled from 'styled-components';

export const SearchResultsStyle = styled.div`
    position: relative;
    width: 36%;
    top: -35px;
    background-color: white;
    border-radius: 10px;
    border-top: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px;
    .search-results-item{
        border-radius: 2px;
        width: 96.5%;
        padding-left: 18px;
        height: 50px;
        display: flex;
        justify-content: flex-start;
        gap: 15px;
        align-items: center;
        font-weight: bolder;
    }
    .search-results-item button{
        text-decoration: none;
        color: #171717;
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 15px;
    }
    .search-results-item button:hover{
        cursor: pointer;
    }
    .search-results-item:hover{
        background-color:#ebebeb;
        cursor: pointer;
    }
    .suggestion-bold{
        font-weight: bolder;
        font-family: sans-serif;
    }

    .search-icon{
        color: #171717;
        font-size: 16px;
    }

`;