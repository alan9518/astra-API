
/* ==========================================================================
** Card Styles
** 15/12/2021
** Alan Medina Silva
** ========================================================================== */
import styled, { css } from 'styled-components';
import { flexContainerColumnCenter } from 'shared/globalStyled';

export const CardContainerStyled = styled(flexContainerColumnCenter)`
    width: '22%'; 
    min-height : 180px;
    border-radius: 5px;
    flex: 1;
    margin: 1%;
    padding: 1em;
    border-radius : ${props => props.theme.borderRadius};
    font-family : ${props => props.theme.fonts.main};
    background-color : ${props => props.theme.colors.whiteText};
    position : relative;
    top: 0;
    transition: all 0.1s ease-in;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor:pointer;

   
    
    &:hover {
        top: -2px;
        box-shadow: ${props => props.theme.hoverBoxShadow};

    }

    h4,p {
        text-align: center;
        font-weight : 600;
        margin-top:0.6em;
        color: ${props => props.theme.colors.mainColor};
    }

    img {
        object-fit: contain;
        height: 100px;
        border-radius: 50%;
    }

    ${props => props.bigCard === true && css`
        width : 100%;
        min-height : 450px;
        background-color :transparent;

        img {
            object-fit: contain;
            height: 300px;
            border-radius: 50%;
        }
    `}




`;


