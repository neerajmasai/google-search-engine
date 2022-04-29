import styled from 'styled-components';

export const OrganicResultStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: Arial, Helvetica, sans-serif;

    .breadcrumb{
        font-size: 14px;
        color: grey;
    }
    .title-img-container{
        display: flex;
        gap: 10px;
        align-items: center;
    }
    .title-img-container .container-left a{
        font-size: large;
        color: #1A0DBE;
    }
    .title-img-container .container-left p{
        color: #404040;
        font-size: 15px;
    }
    .title-img-container .container-right img{
        border-radius: 5px;
    }
    .site-links-container{
        display: flex;
        gap: 10px;
    }
    .site-links-container a{
        font-size: 14px;
        text-decoration: none;
        color: #1A0DBE;
    }
`;