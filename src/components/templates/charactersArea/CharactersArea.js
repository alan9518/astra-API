/* ==========================================================================
** 
** 16/12/2021
** Alan Medina Silva
** ========================================================================== */


// --------------------------------------
// Get Dependences
// --------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'components/molecules';
import noCharacterSelected from 'assets/noCharacterSelected.jpeg';
import {
    CharactersGridContainer,
    CharactersRow,
    CharactersColumn,
    CharactersGridRow
} from './CharactersAreaStyled';
/**
* CharactersArea Component
* 
* @component
* @example
* <CharactersArea/>
*/
const CharactersArea = ({ charactersData, selectedCharacter, onCharacterCardClick }) => {

    console.log("🚀 ~ file: CharactersArea.js ~ line 29 ~ CharactersArea ~ selectedCharacter", selectedCharacter);



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

    const renderSelectedCharacterInfo = () => {
        let componentToRender = null;
        if (!selectedCharacter)
            componentToRender = <Card cardData={{ image: noCharacterSelected, name: 'No Character Selected' }} bigCard />;
        else
            componentToRender = <Card cardData={selectedCharacter} bigCard />;

        return componentToRender;
    }

    return (
        <CharactersGridContainer>
            <CharactersRow>
                <CharactersColumn width="40%">
                    {renderSelectedCharacterInfo()}
                </CharactersColumn>

                <CharactersColumn width="60%">
                    <CharactersGridRow>
                        {renderCharactersCards()}
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
    selectedCharacter: null
};

// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
CharactersArea.propTypes = {
    charactersData: PropTypes.object,
    selectedCharacter: PropTypes.array,
};
// --------------------------------------
// Export Component
// --------------------------------------
export default CharactersArea;