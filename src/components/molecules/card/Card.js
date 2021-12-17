/* ==========================================================================
** Card Component for each character
** 15/12/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import { Title } from 'components/atoms';
import { CardContainerStyled } from './CardStyled';
/**
* card Component
* 
* @component
* @example
* <card/>
*/
const Card = ({ image, title, onClick }) => {

  const onCardClick = () => { onClick(); };

  return (
    <CardContainerStyled as='article' onClick={onCardClick}>
      <img src={image} alt={title} />
      <Title titleText={title} type="s" />
    </CardContainerStyled>
  );
};

// -------------------------------------- 
// Default Props
// -------------------------------------- 
Card.defaultProps = {
  image: '',
  title: '',
  onClick: null

};


// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func

};
// --------------------------------------
// Export Component
// --------------------------------------
export default Card;