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
const Card = ({ cardData, onCardClick, bigCard = false }) => {
  const { image, name } = cardData;

  const onClickEvent = () => {
    console.log("🚀 ~ file: card.js ~ line 23 ~ Card ~ cardData", cardData);
    onCardClick(cardData);
  };

  return (
    <CardContainerStyled as='article' onClick={onClickEvent} bigCard={bigCard}>
      <img src={image} alt={name} />
      <Title titleText={name} type="s" />
    </CardContainerStyled>
  );
};

// -------------------------------------- 
// Default Props
// -------------------------------------- 
Card.defaultProps = {
  cardData: null,
  onCardClick: null,
  bigCard: false
};


// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
Card.propTypes = {
  cardData: PropTypes.object,
  onCardClick: PropTypes.func,
  bigCard: PropTypes.bool,
};
// --------------------------------------
// Export Component
// --------------------------------------
export default Card;