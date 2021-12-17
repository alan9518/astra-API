
/* ==========================================================================
** Card Styles
** 15/12/2021
** Alan Medina Silva
** ========================================================================== */
import styled from 'styled-components';
import { flexContainerColumnCenter } from 'shared/globalStyled';

export const CardContainerStyled = styled(flexContainerColumnCenter)`
    width: 22%;
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
    text-align: center;
        font-weight : 600;
        margin-top:0.6em;
        color: #00afc6;
    &:hover {
        top: -2px;
        box-shadow: ${props => props.theme.hoverBoxShadow};

    }

    img {
        object-fit: contain;
        height: 100px;
    }




`;


