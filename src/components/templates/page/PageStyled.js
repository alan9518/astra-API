/* ==========================================================================
** Pages Styles
** 15/12/2021
** Alan Medina Silva
** ========================================================================== */

import styled from 'styled-components';
import { container } from 'shared/globalStyled';

export const PageContainerStyled = styled(container)`
    border-radius : 1px;
    min-height: 100vh;
    height:100%;
    background-color : ${props => props.theme.colors.baseColor}
`;