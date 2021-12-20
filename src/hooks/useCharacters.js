/* ==========================================================================
** Custom Hook to Manage the Characters State
** 16/12/2021
** Alan Medina Silva
** ========================================================================== */

import { useState, useCallback } from 'react';
import { useCharactersDataContext } from 'contexts/CharactersContext';
import { actionsTypes } from 'reducers/CharactersReducer';
import { getCharacters } from 'services/CharactersService';
import { getErrorMessageFromHTTPRequest } from 'shared/utils';


// --------------------------------------
// Create Hook
// --------------------------------------
const useCharacters = () => {


    const [charactersDataStatus, setCharactersDataStatus] = useState({
        loading: false,
        error: ''
    });

    const { charactersState, dispatch } = useCharactersDataContext();
    const { charactersData, charactersMetaData, selectedCharacter, searchValue, currentPage } = charactersState;
    console.log("🚀 ~ file: useCharacters.js ~ line 27 ~ useCharacters ~ currentPage", currentPage);



    // ?--------------------------------------
    // ? Update the global state, call the reducer
    // ? set values dianmically
    // ?--------------------------------------
    const updateGlobalState = useCallback((stateObject, newValue) => {
        let valueToUpdate = null;
        switch (stateObject) {
            case 'characters':
                valueToUpdate = actionsTypes.setCharactersData;
                break;
            case 'charactersMeta':
                valueToUpdate = actionsTypes.setCharactersMetaData;
                break;
            case 'selectedChar':
                valueToUpdate = actionsTypes.setSelectedCharacter;
                break;
            case 'search': valueToUpdate =
                actionsTypes.setSearchValue;
                break;
            default: valueToUpdate = null;
        }
        dispatch({ type: valueToUpdate, payload: newValue });
    }, []);


    // ?--------------------------------------
    // ? Get all the charcters
    // ? useCallback improves performance
    // ? by only calling the function with a manual triger
    // ?--------------------------------------
    const getCharactersData = useCallback(async (characterID = null, filterOption = '', newPageUrl = '') => {

        setCharactersDataStatus({ loading: true, error: '' });

        const [charactersPromiseData, charactersPromiseError] = await getCharacters(characterID, searchValue, filterOption, newPageUrl);

        // Handle connectivity errors
        if (charactersPromiseError || charactersPromiseData.error) {
            const errorMessage = charactersPromiseError ? getErrorMessageFromHTTPRequest(charactersPromiseError) : getErrorMessageFromHTTPRequest(charactersPromiseData);

            setCharactersDataStatus({ loading: false, error: errorMessage });
            updateGlobalState('characters', []);
            return;
        }

        updateGlobalState('characters', charactersPromiseData.data.results);
        updateGlobalState('charactersMeta', charactersPromiseData.data.info);
        setCharactersDataStatus({ loading: false, error: '' });

    }, [searchValue, charactersMetaData]);



    // ?--------------------------------------
    // ? Set Value of selected character
    // ?--------------------------------------
    const setSelectedCharacter = useCallback((characterData) => {
        updateGlobalState('selectedChar', characterData);
    }, []);


    // ?--------------------------------------
    // ? Set Value of Search Input
    // ?--------------------------------------
    const setSearchValue = useCallback((newSearchValue) => {
        updateGlobalState('search', newSearchValue);
    }, []);



    const goToPage = useCallback(async (newPageUrl) => {

        setCharactersDataStatus({ loading: true, error: '' });
        await getCharactersData(null, null, newPageUrl);

    }, []);





    // ?--------------------------------------
    // ? Expose hooks values and functions
    // ?--------------------------------------
    return {
        getCharactersData,
        setSelectedCharacter,
        setSearchValue,
        goToPage,
        charactersDataLoading: charactersDataStatus.loading,
        charactersDataLoadingError: charactersDataStatus.error,
        charactersDataStatus,
        charactersData,
        charactersMetaData,
        selectedCharacter,
        searchValue

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

