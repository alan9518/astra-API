/* ==========================================================================
** Global styles 
** 15/12/2021
** Alan Medina Silva
** ========================================================================== */


import styled from 'styled-components';


export const container = styled.div`
    width:100%;
    padding:0 2em;
`;

export const flexContainerRow = styled.div`
    display:flex;
    flex-direction : row;
    width : 100%;
    box-sizing  : 'border-box';
`;


export const flexContainerColumn = styled.div`
    display:flex;
    flex-direction : column;
    height : 100%;
    box-sizing: 'border-box';
`;

export const flexContainerRowWrap = styled(flexContainerRow)`
    flex-wrap: wrap;
`;

export const flexContainerRowNoWrap = styled(flexContainerRow)`
    flex-wrap: no-wrap;
`;

export const flexContainerRowSpaceBetween = styled(flexContainerRow)`
    justify-content: space-between;
`;

export const flexContainerRowCenter = styled(flexContainerRow)`
    justify-content: center;
    align-items:center;
`;

export const flexContainerColumnStartCenter = styled(flexContainerColumn)`
    justify-content: center;
    align-items:start;
`;

export const flexContainerColumnCenter = styled(flexContainerColumn)`
    justify-content: center;
    align-items:center;
`;

export const flexContainerRowCenterSpacedBetween = styled(flexContainerRow)`
    justify-content: space-between;
    align-items:center;
`;

export const flexContainerRowCenterSpacedAround = styled(flexContainerRow)`
    justify-content: space-around;
    align-items:center;
`;

export const flexContainerRowCenterStart = styled(flexContainerRow)`
    justify-content: flex-start;
    align-items: center;
`;


export const flexContainerRowCenterEnd = styled(flexContainerRow)`
    justify-content: flex-end;
    align-items: center;
`;



