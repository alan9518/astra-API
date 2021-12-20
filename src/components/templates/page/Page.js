/* ==========================================================================
** Page Template
** This holds the basic styles for all the pages and the components to show
** as children
** 15/12/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import { PageContainerStyled } from './PageStyled';

/**
* Page Component
* 
* @component
* @example
* <Page/>
*/
const Page = ({ children }) => (
    <PageContainerStyled>
        {children}
    </PageContainerStyled>
);

// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
Page.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};
// --------------------------------------
// Export Component
// --------------------------------------
export default Page;