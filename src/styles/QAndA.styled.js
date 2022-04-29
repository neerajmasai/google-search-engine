import styled from 'styled-components';

export const QAndAStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    .container{
        border-bottom: 1px solid #d4d4d4;        
    }
    .question{
        display: flex;
        justify-content: space-between;
        font-weight: bolder;
        align-items: center;
    }

    .answer{
        display: none;
    }
`;

