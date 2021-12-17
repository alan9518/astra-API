/* ==========================================================================
** CHaracters Grid Section Styles
** Disable the eslint consistent-return in order to use functions inside styles
** 15/12/2021
** Alan Medina Silva
** ========================================================================== */
import styled from 'styled-components';
import { container, flexContainerColumnCenter, flexContainerRowSpaceBetween } from 'shared/globalStyled';


export const CharactersGridContainer = styled(container)`
    max-height : 70vh;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    padding: 1em 0;     
`;

export const CharactersRow = styled(flexContainerRowSpaceBetween)``;

export const CharactersColumn = styled(flexContainerColumnCenter)`
    max-width : ${props => props.width ? props.width : '100%'};
`;


export const CharactersGridRow = styled(flexContainerRowSpaceBetween)`
    flex-wrap: wrap;
    article {
        flex : 1;
    }
`;