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
    selectedCharacter: null
};

// --------------------------------------
// Action Types
// Definition of the posible actions to use
// --------------------------------------
export const actionsTypes = {
    setCharactersData: 'SET_CHARACTERS_DATA',
    setSelectedCharacter: 'SET_SELECTED_CHARACTER'
};


// --------------------------------------
// Reducer to manage the state
// state refers to the global app state
// action contains the type and payload (data)
// --------------------------------------
export const charactersReducer = (state, action) => {
    console.log("🚀 ~ file: CharactersReducer.js ~ line 32 ~ charactersReducer ~ state", state);
    console.log("🚀 ~ file: CharactersReducer.js ~ line 32 ~ charactersReducer ~ action", action);
    switch (action.type) {
        case actionsTypes.setCharactersData:
            return { ...state, charactersData: action.payload };
        case actionsTypes.setSelectedCharacter:
            return { ...state, setSelectedCharacter: action.payload };
        default:
            return state;
    }
};