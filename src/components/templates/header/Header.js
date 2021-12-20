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
import { Navbar } from 'components/organisms';

/**
* header Component
* 
* @component
* @example
* <header/>
*/
const header = () => (
  <header >
    <Navbar />
  </header>
);
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