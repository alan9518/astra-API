/* ==========================================================================
** Custom Hook to Manage the Characters State
** 16/12/2021
** Alan Medina Silva
** ========================================================================== */

import { useState, useCallback } from 'react';
import { useCharactersDataContext } from 'contexts/CharactersContext';
import { actionsTypes } from 'reducers/CharactersReducer';
import { getCharacters } from 'services/CharactersService';


// --------------------------------------
// Create Hook
// --------------------------------------
const useCharacters = () => {
    // const [selectedChar, setSelectedChar] = useState(null);
    // const [characters, setCharacters] = useState(null);
    // const [searchCharInputValue, setSearchCharInputValue] = useState('');
    const [charactersDataStatus, setCharactersDataStatus] = useState({
        loading: false,
        error: ''
    });

    const { charactersState, dispatch } = useCharactersDataContext();
    const { charactersData, selectedCharacter } = charactersState;



    const updateCharactersState = useCallback((newCharactersData) => {
        dispatch({ type: actionsTypes.setCharactersData, payload: newCharactersData.results });
        setCharactersDataStatus({ loading: false, error: '' });
    }, []);


    const updateSelectedCharacterState = useCallback((newSelectedChart) => {
        dispatch({ type: 'SET_SELECTED_CHARACTER', payload: newSelectedChart });
    }, []);


    // ?--------------------------------------
    // ? Get all the charcters
    // ? useCallback improves performance
    // ? by only calling the function with a manual triger
    // ?--------------------------------------
    const getCharactersData = useCallback(async (characterID = null) => {
        setCharactersDataStatus({ loading: true, error: '' });
        const [charactersPromiseData, charactersPromiseError] = await getCharacters(characterID);

        // Handle connectivity errors
        if (charactersPromiseError) {
            setCharactersDataStatus({ loading: false, error: 'Error loading the characters, plese try again later' });

            updateCharactersState(null);
        }

        updateCharactersState(charactersPromiseData.data);

    }, []);




    const setSelectedCharacter = useCallback((characterData) => {
        updateSelectedCharacterState(characterData);
    }, []);




    // ?--------------------------------------
    // ? Expose hooks values and functions
    // ?--------------------------------------
    return {
        getCharactersData,
        setSelectedCharacter,
        charactersDataLoading: charactersDataStatus.loading,
        charactersDataStatus,
        charactersData,
        selectedCharacter,

    };
};


// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
// useAds.propTypes = {
//     props: PropTypes
// };
// --------------------------------------
// Export Component
// --------------------------------------
export default useCharacters;

