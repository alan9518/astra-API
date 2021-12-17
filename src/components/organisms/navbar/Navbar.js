// --------------------------------------
// Get Dependences
// --------------------------------------
import React from 'react';
// import PropTypes from 'prop-types';
import { NavbarContainerStyled, NavbarContentStyled } from './NavbarStyled';
/**
* navbar Component
* 
* @component
* @example
* <navbar/>
*/
const Navbar = (props) => {
  console.log("🚀 ~ file: navbar.js ~ line 15 ~ Navbar ~ props", props);
  return (
    <NavbarContainerStyled as="nav" >
      <NavbarContentStyled>
        input search
        button
      </NavbarContentStyled>
    </NavbarContainerStyled>
  )
}
// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
// Navbar.propTypes = {
//   props: PropTypes
// };
// --------------------------------------
// Export Component
// --------------------------------------
export default Navbar;