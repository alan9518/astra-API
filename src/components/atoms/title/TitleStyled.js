/* ==========================================================================
** Title Sttyled component
** ========================================================================== */

import styled from 'styled-components';


export const TitleStyled = styled.h1`
    letter-spacing: 0;
    margin: 0;
    transition: all .2s ease;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-stretch: normal;
    a {
        text-decoration: none !important;
    }

    

    font-family : ${props => props.theme.fonts[props.font] || props.theme.fonts.main};
    text-decoration : ${props => props.underline ? 'underline' : 'none'};
    color : ${props => props.theme.colors[props.color]?.base || '#000'};
    ${props => {
        switch (props.type) {
            case "bold-text":
                return `
                    font-size : ${props.theme.fontSizes.extraLarge};
                    font-weight: 800;
                    line-height: 2rem;
            `;

            case "accent-text":
                return `
                    color : ${props.theme.colors.accentColor};
                    font-weight: 800;
                    line-height: 2rem;
            `;




            default: return ``
        }

    }}

    
    

   
`;

