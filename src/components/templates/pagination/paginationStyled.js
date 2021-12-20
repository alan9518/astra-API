/* ==========================================================================
** Pagination Styles
** 20/12/2021
** Alan Medina Silva
** ========================================================================== */

import styled from 'styled-components';
import { flexContainerRowCenterEnd } from 'shared/globalStyled';


export const PaginationContainerStyled = styled(flexContainerRowCenterEnd)`
    
    padding : 0 1em;

    h3 {
        margin : 0 0.7rem;
        font-size : 1.1rem;
    }

    span {
        font-size: ${props => props.theme.fontSizes.big};
        font-weight: 600;
        margin: 1em;
        cursor : pointer;
        color: ${props => props.theme.colors.mainColor};
    }

    


    @media screen 
    and (min-width : 320px)
    and (max-width : 720px)
    and (orientation: portrait) 
    {
        width: 100%;
        max-width: none;
        justify-content: center;
        margin: 1rem auto;
    }

    @media screen 
    and (min-width:720px)
    and (max-width:1024px) 
    {
        width: 100%;
        max-width: none;
        justify-content: flex-end;
        margin: 1rem auto;
    }
`;