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
  onFocus = null,
}) => {
  console.log("🚀 ~ file: InputText.js ~ line 30 ~ placeholder", placeholder);
  return (

    <InputStyled
      name={name}
      value={value}
      id={name}
      type={type}
      required={isRequired}
      onChange={onInputChange}
      onFocus={onFocus}
      size="small"
    />

  );
};

// -------------------------------------- 
// Define Default props
// -------------------------------------- 
InputText.defaultProps = {
  name: '',
  value: '',
  type: '',
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