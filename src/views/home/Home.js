// --------------------------------------
// Get Dependences
// --------------------------------------
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Page, Header, CharactersArea } from 'components/templates';
import { Form } from 'components/organisms';

import { InputText, Button } from 'components/atoms';

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
        // charactersDataStatus,
        charactersData,
        selectedCharacter,
        charactersDataLoading
    } = useCharacters();


    // ?--------------------------------------
    // ? Get Values from the local state 
    // ? using the hook
    // ?--------------------------------------
    useEffect(() => {
        (async () => {
            console.log("🚀 ~ file: Home.js ~ line 29 ~ Home ~ charactersDataLoading", charactersDataLoading);
            await getCharactersData();
            console.log("🚀 ~ file: Home.js ~ line 29 ~ Home ~ charactersDataLoading", charactersDataLoading);

        })();

    }, []);





    if (charactersDataLoading)
        return <span>loading...</span>


    return (
        <>
            <Header />
            <Page >

                <div>
                    <Form>
                        <InputText type='text' placeholder='nput text' />
                        <Button size='small' />
                    </Form>

                    <CharactersArea
                        charactersData={charactersData}
                        selectedCharacter={selectedCharacter}
                    />


                </div>
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