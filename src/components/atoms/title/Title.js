/* ==========================================================================
** Custom Title 
** 15/12/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
import React from 'react';
import PropTypes from 'prop-types';

import { TitleStyled } from './TitleStyled';


// --------------------------------------
// Create Functional Component
// --------------------------------------
const Title = ({
    titleText = "",
    size = "",
    type = "",
    color = "darkBlack",
}) => {

    let tagName = '';
    switch (size) {
        case "xl": tagName = "h1"; break;
        case "l": tagName = "h2"; break;
        case "m": tagName = "h3"; break;
        case "s": tagName = "h4"; break;
        case "xs": tagName = "h5"; break;
        case "xxs": tagName = "h6"; break;
        case "text": tagName = "p"; break;
        case "span": tagName = "span"; break;
        default: tagName = "p"; break;
    }

    return (
        <TitleStyled
            as={tagName}
            type={type}
            color={color}
        // onClick={onClick}
        // font={font}
        // underline={underline}
        // role={onClick !== null ? "button" : "text"}
        >
            {titleText}



        </TitleStyled>
    );

};

// -------------------------------------- 
// Default Props 
// -------------------------------------- 
Title.defaultProps = {
    size: '',
    color: '',
};

// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
Title.propTypes = {
    titleText: PropTypes.string.isRequired,
    size: PropTypes.string,
    type: PropTypes.string.isRequired,
    color: PropTypes.string,

};

// --------------------------------------
// Export Component
// --------------------------------------
export default Title;