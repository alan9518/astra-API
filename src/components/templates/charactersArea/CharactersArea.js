/* ==========================================================================
** Characters Area
** This template manages how to render the section based on the props
** 16/12/2021
** Alan Medina Silva
** ========================================================================== */


// --------------------------------------
// Get Dependences
// --------------------------------------
import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'components/molecules';
import { Title } from 'components/atoms';

import noCharacterSelected from 'assets/noCharacterSelected.jpeg';
import {
    CharactersGridContainer,
    CharactersRow,
    CharactersColumn,
    CharactersGridRow,
    NoDataContainer
} from './CharactersAreaStyled';
/**
* CharactersArea Component
* 
* @component
* @example
* <CharactersArea/>
*/
const CharactersArea = ({
    charactersData,
    selectedCharacter,
    onCharacterCardClick,
    loadingData,
    errorOnData,
    showInitialStateMessage }) => {


    // ?--------------------------------------
    // ? Render the list of cards
    // ?--------------------------------------
    const renderCharactersCards = () => {



        if (!charactersData)
            return null;

        return charactersData && charactersData.map((character) => {
            const { id } = character;
            return (
                <Card cardData={character} key={id} onCardClick={onCharacterCardClick} />
            );
        });

    };

    // ?--------------------------------------
    // ? Render the Selected Character Card INfo
    // ?--------------------------------------
    const renderSelectedCharacterInfo = () => {
        let componentToRender = null;

        if (!charactersData)
            return null;

        if (!selectedCharacter)
            componentToRender = <Card cardData={{ image: noCharacterSelected, name: 'No Character Selected', noData: true }} bigCard />;
        else
            componentToRender = <Card cardData={selectedCharacter} bigCard />;

        return componentToRender;
    };


    // ?--------------------------------------
    // ? Render Skeleton Loader for the cards
    // ?--------------------------------------
    const renderSkeletonCards = () => Array(12).fill().map(() => <Card cardData={null} loadingCard key={Math.random()} />);


    // ?--------------------------------------
    // ? Show the message to start using the app
    // ?--------------------------------------
    if (showInitialStateMessage)
        return (
            <NoDataContainer>
                <Title titleText='To start the App, type the name of a character' size="l" type="accent-text" />
            </NoDataContainer>
        );


    // ?--------------------------------------
    // ? If there's an error; show the error
    // ? Exit early if there is no data and no error
    // ?--------------------------------------
    if (!loadingData && errorOnData !== '')
        return (
            <NoDataContainer>
                <Title titleText={errorOnData} size="l" type="accent-text" />
            </NoDataContainer>
        );



    return (
        <CharactersGridContainer>
            <CharactersRow>
                <CharactersColumn width="40%">
                    {renderSelectedCharacterInfo()}
                </CharactersColumn>

                <CharactersColumn width="60%">
                    <CharactersGridRow>
                        {
                            loadingData === true ?
                                renderSkeletonCards() :
                                renderCharactersCards()
                        }
                    </CharactersGridRow>
                </CharactersColumn>
            </CharactersRow>
        </CharactersGridContainer>
    );
};

// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
CharactersArea.defaultProps = {
    charactersData: null,
    selectedCharacter: null,
    loadingData: false,
    errorOnData: '',
    showInitialStateMessage: true
};

// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
CharactersArea.propTypes = {
    charactersData: PropTypes.array,
    selectedCharacter: PropTypes.object,
    loadingData: PropTypes.bool,
    errorOnData: PropTypes.string,
    showInitialStateMessage: PropTypes.bool
};
// --------------------------------------
// Export Component
// --------------------------------------
export default CharactersArea;