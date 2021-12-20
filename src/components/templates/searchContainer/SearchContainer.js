/* ==========================================================================
** Search Container Template
** 17/12/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'components/organisms';
import { InputText, Button } from 'components/atoms';
import { SearchContainerStyled } from './SearchContainerStyled';
/**
* SearchContainer Component
* 
* @component
* @example
* <SearchContainer/>
*/
const SearchContainer = ({ setSearchValue, searchValue, filterCharactersOnClick }) => {

    // ?--------------------------------------
    // ? Read Input Value
    // ? And send it to the global state
    // ?--------------------------------------
    const onInputSearchUpdate = (event) => {
        const { value } = event.target;
        setSearchValue(value);
    };

    // ?--------------------------------------
    // ? On search Click Event
    // ?--------------------------------------
    const onSearchClickButton = (event) => {
        event.preventDefault();
        filterCharactersOnClick(searchValue);

    };


    return (
        <Form>
            <SearchContainerStyled>
                <InputText
                    name="searchCharacter"
                    type="text"
                    placeholder='Search by name'
                    size="medium"
                    onInputChange={onInputSearchUpdate}
                    value={searchValue}

                />
                <Button size='small' title='Search' onClick={onSearchClickButton} />
            </SearchContainerStyled>

        </Form>
    );
};

// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
SearchContainer.defaultProps = {
    setSearchValue: null,
    searchValue: ''
};

// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
SearchContainer.propTypes = {
    setSearchValue: PropTypes.func,
    searchValue: PropTypes.string
};
// --------------------------------------
// Export Component
// --------------------------------------
export default SearchContainer;