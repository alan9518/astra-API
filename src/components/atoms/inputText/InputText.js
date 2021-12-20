/* ==========================================================================
** Custom Input Component
** 15/12/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import { InputStyled } from './InputTextStyled';
/**
* input Component
* 
* @component
* @example
* <input/>
*/
const InputText = ({
  name = '',
  value = '',
  type = 'text',
  isRequired = false,
  onInputChange,
  placeholder = "",
  size = "small",
  onFocus = null,
}) => (

  // return (

  <InputStyled
    name={name}
    value={value}
    id={name}
    type={type}
    required={isRequired}
    onChange={onInputChange}
    onFocus={onFocus}
    size={size}
    placeholder={placeholder}
  />

  // );
);

// -------------------------------------- 
// Define Default props
// -------------------------------------- 
InputText.defaultProps = {
  name: '',
  value: '',
  type: '',
  size: 'small',
  placeholder: '',
  isRequired: false,
  onInputChange: null,
  onFocus: null
};


// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
InputText.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  isRequired: PropTypes.bool,
  onInputChange: PropTypes.func,
  onFocus: PropTypes.func
};
// --------------------------------------
// Export Component
// --------------------------------------
export default InputText;