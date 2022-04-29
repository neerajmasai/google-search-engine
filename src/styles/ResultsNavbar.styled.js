import styled from 'styled-components';

export const ResultsNavbarStyle = styled.div`
    width: 86%;
    height: 50px;
    margin-top: 15px;
    border-bottom: 1px solid silver;
    display: flex;
    gap: 20px;
    align-items: center;
    color: grey;
    padding-left: 220px;

    .results-navbar-icons{
        display: flex;
        justify-content: space-evenly;
        cursor: pointer;
    }
    .results-navbar-buttons{
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
    }
    .results-navbar-icons > span {
        font-size: 18px;
        font-weight: 900;
    }
    .results-navbar-icons-active{
        line-height: 44px;
        border-bottom: 4px solid #8AB4F1;
        color: #8AB4F1;
    }
`;