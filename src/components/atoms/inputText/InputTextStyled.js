/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* ==========================================================================
** Input  Styles
** Disable the eslint consistent-return in order to use functions inside styles
** 15/12/2021
** Alan Medina Silva
** ========================================================================== */
import styled from 'styled-components';

export const InputStyled = styled.input`
    width : 100%;
    border-radius: ${props => props.theme.borderRadius};
    border : 0;
    font-family : ${props => props.theme?.fonts?.base || 'roboto'};
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
`;