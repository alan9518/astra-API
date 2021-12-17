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

    

    font-family : ${props => props.theme.fonts[props.font]};
    text-decoration : ${props => props.underline ? 'underline' : 'none'};
    color : ${props => props.theme.colors[props.color]?.base || '#000'};
    ${props => {
        switch (props.type) {
            case "sidebar-title":
                return `
                    font-size : ${props.theme.fontSizes.extraLarge};
                    font-weight: 500;
                    line-height: 2rem;
                    
            `;

            case "sidebar-subtitle":
                return `
                    font-weight: 300;
                    font-size : ${props.theme.fontSizes.small};
                    letter-spacing: 1px;
                    
            `;

            case "table-item-text":
                return `
                    font-weight: normal;
                    font-size : ${props.theme.fontSizes.extraSmall};
                    line-height: 30px;
                    text-transform : capitalize;
                `;

            case "table-header":
                return `
                    
                    font-weight: 700;
                    font-size : ${props.theme.fontSizes.small};
                    line-height: 30px;
                `;
            case "table-status":
                return `
                    font-weight : 900;
                    text-transform : uppercase;
                    font-size : ${props.theme.fontSizes.extraSmall};
                `;

            case "user-name":
                return `
                    font-size : ${props.theme.fontSizes.small};
                    font-weight: 300;
                `;

            case "login-link":
                return `    
                    font-size : ${props.theme.fontSizes.extraSmall};
                    font-weight: 500;
                    cursor:pointer;
                    transition: color cubic-bezier(0.05, 0.6, 0.57, 1.26) 300ms;
                    &:hover {
                        color : ${props.theme.colors[props.color].hover || '#000'};
                    }
                `;

            case "login-link-big":
                return `    
                        font-size : ${props.theme.fontSizes.small};
                        font-weight: 500;
                        cursor:pointer;
                        transition: color cubic-bezier(0.05, 0.6, 0.57, 1.26) 300ms;
                        &:hover {
                            color : ${props.theme.colors[props.color].hover || '#000'};
                        }

                        &:hover svg {
                            color : ${props.theme.colors[props.color].hover || '#000'};
                        }
            `;
            case "login-link-underline":
                return `    
                        font-size : ${props.theme.fontSizes.small};
                        font-weight: 500;
                        cursor:pointer;
                        text-decoration: underline;
                        text-decoration-color: transparent;
                        transition: border cubic-bezier(0.05, 0.6, 0.57, 1.26) 300ms;
                        -webkit-text-decoration-color: transparent;
                        -moz-text-decoration-color: transparent;
                        &:hover {
                            text-decoration-color: ${props.theme.colors[props.color].main || '#fff'};;
                            -webkit-text-decoration-color: ${props.theme.colors[props.color].main || '#fff'};;
                            -moz-text-decoration-color: ${props.theme.colors[props.color].main || '#fff'};;
                        }

                      
            `;
            case "alert-title":
                return `    
                    font-size : ${props.theme.fontSizes.small};
                    font-weight: 500;
                    color : ${props.theme.colors[props.color].hover || '#000'};
                    margin-right : 0.5rem;
                `;

            case "alert-text":
                return `    
                        font-size : ${props.theme.fontSizes.small};
                        font-weight: 500;
                        color : ${props.theme.colors[props.color].hover || '#000'};
                        text-transform : capitalize;
                    `;
            case "details-title":
                return `
                        font-size : ${props.theme.fontSizes.medium};
                        font-weight: 700;
                        color : ${props.theme.colors.darkBlack.base || '#000'};
                        text-transform : capitalize;
                    `
            case "details-label":
                return `
                        font-size : ${props.theme.fontSizes.extraSmall};
                        font-weight: 400;
                        color : ${props.theme.colors[props.color].base || '#000'};
                        text-transform : lowercase;
                        margin-right: 0.5rem;

                        &&::first-letter {
                            text-transform: uppercase;
                        }
                    `;
            case "details-value":
                return `
                        font-size : ${props.theme.fontSizes.extraSmall};
                        font-weight: 700;
                        color : ${props.theme.colors[props.color].base || '#000'};
                        text-transform : inherit;
                    `

            case "modal-title":
                    return `
                        font-size : ${props.theme.fontSizes.medium};
                        font-weight: 700;
                        color : ${props.theme.colors[props.color].base || '#000'};
                        text-transform : uppercase;
                    `

            case "modal-title-confirm":
                    return `
                        font-size : ${props.theme.fontSizes.medium};
                        font-weight: 700;
                        text-align : center;
                        text-transform : lowercase;
                        &&::first-letter {
                                text-transform: uppercase;
                        }
                    `

            case "modal-subTitle-confirm":
                        return `
                            font-size : ${props.theme.fontSizes.small};
                            font-weight: 400;
                            color : ${props.theme.colors[props.color].base || '#000'};
                            text-align : center;
                            line-height: 1.6rem;
                            text-transform : unset;
                            
                        `
                    

            default: return ``
        }

    }}

    
    

   
`;

