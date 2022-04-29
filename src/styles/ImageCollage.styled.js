import styled from 'styled-components';

export const ImageCollageStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2px;
    img{
        border-radius: 5px;
    }
    .big-img{
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 2px;
    }
    .big-img img{
        width: 48%;
    }
    .small-img{
        display: flex;
        justify-content: space-evenly;
    }
    .small-img img{
        width: 32%;
    }
`;