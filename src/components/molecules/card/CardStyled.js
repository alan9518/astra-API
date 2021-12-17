/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* ==========================================================================
** Card Styles
** Disable the eslint consistent-return in order to use functions inside styles
** 15/12/2021
** Alan Medina Silva
** ========================================================================== */
import styled from 'styled-components';
import { flexContainerColumnCenter } from 'shared/globalStyled';

export const CardContainerStyled = styled(flexContainerColumnCenter)`
    max-width : 300px;
    max-height : 25vh;
    border-radius : ${props => props.theme.borderRadius};
    border : 1px solid #3e3e3e3;
`;