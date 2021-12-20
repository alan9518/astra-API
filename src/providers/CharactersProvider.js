
import { useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';
import { CharactersContext } from 'contexts/CharactersContext';
import { charactersReducer, charactersIntialState } from 'reducers/CharactersReducer';

export const CharactersProvider = ({ children }) => {

    // Wrap the dispatch and state inside a useMemo function to improve the performance
    // since every call to the state triggers a re-render, this wrap will re-render only 
    // when the state actually changes
    const [charactersState, dispatch] = useReducer(charactersReducer, charactersIntialState);
    const store = useMemo(() => ({ charactersState, dispatch }), [charactersState]);

    return (
        <CharactersContext.Provider value={store}>
            {children}
        </CharactersContext.Provider>
    );
};

CharactersProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};