import styled from 'styled-components';

export const NavbarItemStyled = styled.div`
    a{
        text-decoration: none;
        color: #171717;
        font-weight: bolder;
        font-size: 13.5px;
        
        &:hover{
            cursor: pointer;
            text-decoration: underline;
        }
        span{
            margin-top: 4px;
            color: grey;
            font-weight: bold;
            font-size: 24px;
        }
        .navbar-icons-profile{
            color: grey;
            font-size: 35px;    
            font-weight: normal;        
        }
    }

`