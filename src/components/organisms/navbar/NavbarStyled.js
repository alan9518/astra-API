/* ==========================================================================
** Nav Bar Styles
** 15/12/2021
** Alan Medina Silva
** ========================================================================== */

import styled from 'styled-components';
import {
    flexContainerRowCenterStart,
    container
} from 'shared/globalStyled';


export const NavbarContainerStyled = styled(container)`
    width:100%;
    min-height : 10vh;
    height : 100px;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    -moz-box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
`;

export const NavbarContentStyled = styled(flexContainerRowCenterStart)`
    width:100%;
    height : 100%;

    img {
        width : 200px;
    }

`;