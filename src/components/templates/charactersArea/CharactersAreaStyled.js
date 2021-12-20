/* ==========================================================================
** CHaracters Grid Section Styles
** Disable the eslint consistent-return in order to use functions inside styles
** 15/12/2021
** Alan Medina Silva
** ========================================================================== */
import styled from 'styled-components';
import { container, flexContainerColumnCenter, flexContainerRowCenter, flexContainerRowSpaceBetween } from 'shared/globalStyled';


export const CharactersGridContainer = styled(container)`
    max-height : 70vh;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    padding: 1em 0;     
`;

export const CharactersRow = styled(flexContainerRowSpaceBetween)`
    @media screen 
    and (min-width : 320px)
    and (max-width : 720px)
    and (orientation: portrait) 
    {
    flex-direction : column;
    }
`;

export const CharactersColumn = styled(flexContainerColumnCenter)`
    max-width : ${props => props.width ? props.width : '100%'};
    width: 100%;
    height: 100%;

    @media screen 
    and (min-width : 320px)
    and (max-width : 720px)
    and (orientation: portrait) 
    {
        max-width : 100%;
        width: 100%;
    }
`;


export const CharactersGridRow = styled(flexContainerRowSpaceBetween)`
    flex-wrap: wrap;
    article {
        flex : 1;
    }
`;


export const NoDataContainer = styled(flexContainerRowCenter)`
    height: 200px;
    align-items: flex-start;
    margin-top: 15vh;
`;