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
const card = ({ image, title, onClick }) => {

  const onCardClick = () => { onClick(); };

  return (
    <CardContainerStyled as='article' onClick={onCardClick}>
      <img src={image} alt={title} />
      <Title titleText={title} type="s" />
    </CardContainerStyled>
  )
}
// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func

};
// --------------------------------------
// Export Component
// --------------------------------------
export default card;