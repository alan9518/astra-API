/* ==========================================================================
** Characters Reducer
** This File controls the actions for the characters
** 16/12/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Intial State
// --------------------------------------
export const charactersIntialState = {
    charactersData: null,
    charactersMetaData: null,
    selectedCharacter: null,
    searchValue: '',
};

// --------------------------------------
// Action Types
// Definition of the posible actions to use
// --------------------------------------
export const actionsTypes = {
    setCharactersData: 'SET_CHARACTERS_DATA',
    setCharactersMetaData: 'SET_CHARACTERS_METADATA',
    setSelectedCharacter: 'SET_SELECTED_CHARACTER',
    setSearchValue: 'SET_SEARCH_VALUE'
};


// --------------------------------------
// Reducer to manage the state
// state refers to the global app state
// action contains the type and payload (data)
// --------------------------------------
export const charactersReducer = (state, action) => {
    switch (action.type) {
        case actionsTypes.setCharactersData:
            return { ...state, charactersData: action.payload };
        case actionsTypes.setCharactersMetaData:
            return { ...state, charactersMetaData: action.payload };
        case actionsTypes.setSelectedCharacter:
            return { ...state, selectedCharacter: action.payload };
        case actionsTypes.setSearchValue:
            return { ...state, searchValue: action.payload };
        default:
            return state;
    }
};