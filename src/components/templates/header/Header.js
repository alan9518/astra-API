/* ==========================================================================
** Header Component
** This template holds the logo, navbar, actions, etc...
** 15/12/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
import React from 'react';
// import PropTypes from 'prop-types';
import { Navbar } from 'components/organisms';
/**
* header Component
* 
* @component
* @example
* <header/>
*/
const header = (props) => {
  console.log("🚀 ~ file: header.js ~ line 21 ~ header ~ props", props);
  return (
    <header >
      <Navbar />
    </header>
  )
}
// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
// header.propTypes = {
//   props: PropTypes
// };
// --------------------------------------
// Export Component
// --------------------------------------
export default header;