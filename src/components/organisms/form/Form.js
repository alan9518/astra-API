/* ==========================================================================
** Form Component with dynamic inputs 
** The inputs come from the children prop
** 15/12/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
/**
* Form Component
* 
* @component
* @example
* <Form> <Form/>
*/
const Form = ({ children }) => {
    console.log('action form')
    return (
        <form >
            {children}
        </form>
    )
}
// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
Form.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};
// --------------------------------------
// Export Component
// --------------------------------------
export default Form;