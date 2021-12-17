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
const CharactersArea = ({ charactersData, selectedCharacter }) => {


    // ?--------------------------------------
    // ? Render the list of cards
    // ?--------------------------------------
    const renderCharactersCards = () => {
        if (!charactersData)
            return null;

        return charactersData && charactersData.map((character) => {
            const { image, id, name } = character;
            return (
                <Card image={image} title={name} key={id} />
            );
        });

    };

    return (
        <CharactersGridContainer>
            <CharactersRow>
                <CharactersColumn width="40%">
                    <div className="emptyArea">
                        {selectedCharacter !== null ? 'char' : 'empty'}
                    </div>
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