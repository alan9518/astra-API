/* ==========================================================================
** Home Page
** This holds all the subcomponents that compose this page as well as connect
** to the global state
** 20/12/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
import React, {
    // useEffect 
} from 'react';
// import PropTypes from 'prop-types';
import { Page, Header, CharactersArea, SearchContainer, Pagination } from 'components/templates';
import useCharacters from 'hooks/useCharacters';

/**
* Home Component
* 
* @component
* @example
* <Home/>
*/
const Home = () => {

    // ?--------------------------------------
    // ? Connect with Hook and global state
    // ?--------------------------------------
    const {
        getCharactersData,
        setSelectedCharacter,
        setSearchValue,
        goToPage,
        charactersData,
        charactersMetaData,
        selectedCharacter,
        charactersDataLoading,
        charactersDataLoadingError,
        searchValue
    } = useCharacters();



    // ?--------------------------------------
    // ? Get Values from the local state 
    // ? Uncomment this effect if you want
    // ? trigger the search when the app loads
    // ? using the hook
    // ?--------------------------------------
    // useEffect(() => {
    //     (async () => {
    //         await getCharactersData();
    //     })();
    // }, []);


    // ?--------------------------------------
    // ? Trigger the search action on click
    // ?--------------------------------------
    const filterSearchValue = async () => {
        await getCharactersData(null, 'name');
    };


    const onPageClick = (pageUrl) => {
        goToPage(pageUrl);
    };


    // ?--------------------------------------
    // ? This function checks if the user has
    // ? just accessed the page, therefore should
    // ? be an empty state on everything
    // ?--------------------------------------
    const showCharacters = () => {
        if (searchValue === '' && !charactersData && charactersDataLoading === false)
            return false;
        return true;
    };

    const initialAppState = showCharacters();


    return (
        <>
            <Header />
            <Page >

                <SearchContainer
                    setSearchValue={setSearchValue}
                    searchValue={searchValue}
                    filterCharactersOnClick={filterSearchValue}
                />

                {
                    !charactersDataLoading && charactersMetaData?.pages > 1 &&
                    <Pagination
                        pageIndex={0}
                        numOfPages={charactersMetaData.pages}
                        goToSelectedPage={onPageClick}
                        goToNextPage={charactersMetaData.next}
                        goToPrevPage={charactersMetaData.prev}
                    />
                }

                <CharactersArea
                    showInitialStateMessage={!initialAppState}
                    charactersData={charactersData}
                    selectedCharacter={selectedCharacter}
                    onCharacterCardClick={setSelectedCharacter}
                    loadingData={charactersDataLoading}
                    errorOnData={charactersDataLoadingError}
                />



            </Page>
        </>
    );
};
// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
// Home.propTypes = {
//     props: PropTypes
// };
// --------------------------------------
// Export Component
// --------------------------------------
export default Home;