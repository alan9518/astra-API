// --------------------------------------
// Get Dependences
// --------------------------------------
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Page, Header } from 'components/templates';
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


    const { getCharactersData, charactersDataStatus, charactersData } = useCharacters();





    useEffect(() => {
        (async () => {
            await getCharactersData();
            console.log("🚀 ~ file: Home.js ~ line 24 ~ Home ~ charactersData", charactersDataStatus);
            console.log("🚀 ~ file: Home.js ~ line 34 ~ charactersData", charactersData);
        })();

    }, []);


    return (
        <>
            <Header />
            <Page >

                <Form>
                    <InputText type='text' placeholder='nput text' />
                    <Button size='small' />
                </Form>

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