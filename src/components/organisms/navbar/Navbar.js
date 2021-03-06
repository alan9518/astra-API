// --------------------------------------
// Get Dependences
// --------------------------------------
import React from 'react';
// import PropTypes from 'prop-types';
import logo from 'assets/logo.png';
import { NavbarContainerStyled, NavbarContentStyled } from './NavbarStyled';
/**
* navbar Component
* 
* @component
* @example
* <navbar/>
*/
const Navbar = () => (
  <NavbarContainerStyled as="nav" >
    <NavbarContentStyled>
      <img src={logo} alt="Rick and Morty Api client" />
    </NavbarContentStyled>
  </NavbarContainerStyled>
);
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