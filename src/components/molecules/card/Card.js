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
import { SkeletonLoader } from 'components/molecules';
import { Title } from 'components/atoms';
import { CardContainerStyled, CardDetailsListItemDetails } from './CardStyled';
/**
* card Component
* 
* @component
* @example
* <card/>
*/
const Card = ({ cardData, onCardClick, bigCard = false, loadingCard = false }) => {


  const onClickEvent = () => {
    onCardClick(cardData);
  };


  // ?--------------------------------------
  // ? Render Selected Character Details
  // ?--------------------------------------
  const renderCardDetails = () => {
    if (cardData.noData || cardData === null)
      return null;

    const { status, species, gender, origin, location } = cardData;

    return (
      <ul >
        <CardDetailsListItemDetails as="li">
          <Title titleText="Status: " size="span" type="bold-text" />
          <Title titleText={status} size="span" type="accent-text" />
        </CardDetailsListItemDetails>
        <CardDetailsListItemDetails as="li">
          <Title titleText="Species: " size="span" type="bold-text" />
          <Title titleText={species} size="span" type="accent-text" />
        </CardDetailsListItemDetails>
        <CardDetailsListItemDetails as="li">
          <Title titleText="Gender: " size="span" type="bold-text" />
          <Title titleText={gender} size="span" type="accent-text" />
        </CardDetailsListItemDetails>
        <CardDetailsListItemDetails as="li">
          <Title titleText="Last location: " size="span" type="bold-text" />
          <Title titleText={location?.name} size="span" type="accent-text" />
        </CardDetailsListItemDetails>
        <CardDetailsListItemDetails as="li">
          <Title titleText="Origin: " size="span" type="bold-text" />
          <Title titleText={origin?.name} size="span" type="accent-text" />
        </CardDetailsListItemDetails>
      </ul>
    );
  };


  return (
    <CardContainerStyled as='article' onClick={onClickEvent} bigCard={bigCard}>
      {
        loadingCard
          ? <SkeletonLoader loaderType='image' />
          : <img src={cardData?.image} alt={cardData?.name} />}
      {
        loadingCard
          ? <SkeletonLoader loaderType='text' />
          : <Title titleText={cardData?.name} size="s" />
      }
      {
        bigCard && renderCardDetails()
      }
    </CardContainerStyled>
  );
};

// -------------------------------------- 
// Default Props
// -------------------------------------- 
Card.defaultProps = {
  cardData: null,
  onCardClick: null,
  bigCard: false,
  loadingCard: false,
};


// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
Card.propTypes = {
  cardData: PropTypes.object,
  onCardClick: PropTypes.func,
  bigCard: PropTypes.bool,
  loadingCard: PropTypes.bool,
};
// --------------------------------------
// Export Component
// --------------------------------------
export default Card;