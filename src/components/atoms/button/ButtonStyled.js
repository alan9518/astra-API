/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* ==========================================================================
** Button Styles
** Disable the eslint consistent-return in order to use functions inside styles
** 15/12/2021
** Alan Medina Silva
** ========================================================================== */
import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button`
    border-radius: ${props => props.theme.borderRadius};
    text-align: center;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: 800;
    font-stretch: normal;
    cursor:pointer;
    line-height: 30px;
    margin : 0;
    letter-spacing: 0px;
    border: none;
    transition: all cubic-bezier(0.05, 0.6, 0.57, 1.26)  400ms ;
    position: relative;
    padding : 0 .5rem;
    ${props => {
        switch (props.size) {
            case "xsmall":
                return `
                max-width: 150px;
                min-width: 140px;
                min-height: 40px;
                max-height: 50px;
                border-radius : ${props => props.theme.borderRadiusBig};
                text-transform: uppercase;
            `;
            case "small":
                return `
                max-width: 220px;
                min-width: 130px;
                min-height: 40px;
                max-height: 70px;
                
            `;
            case "medium":
                return ` 
                max-width: 250px;
                min-width: 200px;
                min-height: 50px;
                max-height: 70px;
            `;
            case "large":
                return `
                    width: 100%;
                    min-width: 260px;
                    padding: .5rem;
                    font-size: 1.2rem;
                    min-height: 30px;
        
                `;
            default: return "font-size: 16px;";

        }

    }}

    font-family : ${props => props.theme.fonts.base};
    font-size: ${props => props.theme.fontSizes[props.size]};
    background-color : ${props => props.theme.colors.mainColor};
    color : ${props => props.theme.colors.whiteText};
    ${props => {
        if (props.disabled) {
            return `
            pointer-events: none;
            background-color:  #c9c9c9;
            color: #fff;
          `;
        }

        if (props.loadingData) {
            return `
                pointer-events: none;
                color: #fff;
          `;
        }

        if (props.blockEvents) {
            return `
                pointer-events: none;
          `;
        }
    }}


    ${props => props.useLowercase && css`
        text-transform: capitalize;
        font-family : Lato;
    `}

    &:hover {
        background-color : ${props => props.theme.colors.main};
        
    }

    .loadingButtonContainer {
        display: flex;
        flex-direction: row;
        justify-content: center;
        
    }


`;

