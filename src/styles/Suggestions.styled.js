import styled from 'styled-components';

export const SuggestionsStyle = styled.div`
    position: absolute;
    margin-top: 80px;
    width: 24.5%;
    padding-bottom: 20px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    h4{
        margin: 0px;
    }
    .title{
        padding-left: 15px;
        font-weight: bolder;
        padding-bottom: 10px;
        border-bottom: 1px solid #d4d4d4;
    }
    .suggest-item{
        width: 100%;
        display: flex;
        height: 75px;
        padding-left: 15px;
        gap: 20px;
        padding-right: 0px;
        cursor: pointer;
        border-bottom: 1px solid #d4d4d4;
    }

    .suggest-item .left{
        width: 15%;
    }
    .suggest-item .right{
        width: 85%;
        display: flex;
        flex-direction: column;
        gap: 0px;
    }
    .suggest-item p{
        color: #6b6b6b;
        font-size: 14px;
        font-weight: bolder;
    }
    .suggest-item img{
       border-radius: 10px;
       width: 55px;
       height: 50px;
    }
    .results-container{
        margin-left: 0px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 0px;
    }
    .arrow-icon{
        width: 10%;
        margin-top: 30px;
        display: flex;
    }
    .arrow-icon span{
        font-size: 18px;
    }
`;