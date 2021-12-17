/* ==========================================================================
** Custom Button Component
** 15/12/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import Loader from "react-loader-spinner";
import { ButtonStyled } from './ButtonStyled';

/**
* button Component
* 
* @component
* @example
* <button/>
*/
const button = ({
  size = "small",
  type = "main",
  title = "button",
  onClick = null,
  id = "",
  // isLink = false,
  // linkPath = "",
  // isSubmit = false,
  loadingData = false,
  isDisabled = false,
  blockEvents = false,
  useLowercase = false
}) => {
  console.log("🚀 ~ file: button.js ~ line 14 ~ buttonStyled", ButtonStyled);
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      id={id}
      size={size}
      disabled={isDisabled}
      loadingData={loadingData}
      blockEvents={blockEvents}
      useLowercase={useLowercase} >

      {
        loadingData === false && title
      }
      {
        loadingData &&
        <Loader
          type="Oval"
          color="#fff"
          height={30}
          width={30}
          className="loadingButtonContainer"
        />
      }
    </ButtonStyled>
  );
};
// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
button.propTypes = {
  size: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  onClick: PropTypes.func,
  isLink: PropTypes.bool,
  linkPath: PropTypes.string,
  isSubmit: PropTypes.bool,
  loadingData: PropTypes.bool,
  disabled: PropTypes.bool,
  blockEvents: PropTypes.bool
};
// --------------------------------------
// Export Component
// --------------------------------------
export default button;