import styled from 'styled-components';

export const AnswerSnippetStyle = styled.div`

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
        font-weight: bolder;
        font-size: 15px;
        line-height: 1.6;
    }

    .snippet-preview{
        display: flex;
        flex-direction: column;
        gap: 0px;
        margin-bottom: 30px;
    }

    .snippet-preview p{
        font-size: 14px;
        color: grey;
    }

    .snippet-preview a{
        font-size: large;
        color: #1A0DBE;
    }
    .arrow-down{
        cursor: pointer;
    }
`;