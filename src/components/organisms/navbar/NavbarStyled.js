/* ==========================================================================
** Nav Bar Styles
** 15/12/2021
** Alan Medina Silva
** ========================================================================== */

import styled from 'styled-components';
import {
    flexContainerRowCenterSpacedBetween,
    flexContainerRowCenter
    // flexContainerRowCenterStart, 
    // flexContainerColumnCenter, 
    // container
} from 'shared/globalStyled';


export const NavbarContainerStyled = styled(flexContainerRowCenterSpacedBetween)`
    width:100%;
    min-height : 10vh;
    height : 100px;
`;

export const NavbarContentStyled = styled(flexContainerRowCenter)`
    width:100%;
    height : 100%;
`;