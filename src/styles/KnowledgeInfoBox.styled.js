import styled from 'styled-components';

export const KnowledgeInfoBoxStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    .info-box{
        margin: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #d4d4d4;
    }
    .left{
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding-left: 15px;
    }
    .left h1{
        margin-bottom: 0px;
        font-weight: bolder;
    }
    .left h4{
        margin-top: 0px;
        color: #7093B2;
        font-weight: bolder;
    }
    .right{
        margin-top: 25px;
        width: 20%;
        color: grey;
    }
    .right span{
        font-size: 28px;
    }

    .description{
        padding-left: 15px;
        font-weight: bolder;
        font-size: 14px;
        line-height: 1.5;
    }

    .search-suggest{
        display: flex;
        justify-content: flex-start;
        padding-left: 15px;
        gap: 20px;
    }
    .search-suggest img{
        width: 70px;
        height: 70px;
        border-radius: 5px;
    }
    .suggest-item{
        display: flex;
        flex-direction: column;
        gap:5px;
    }
    .recommend-box{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .recommend-box h3{
        font-weight: bolder;
        padding-left: 15px;
    }
    .suggest-item a{
        text-decoration: none;
        font-weight: bolder;
        font-size: 14px;
    }
`;