/* ==========================================================================
** 
** 17/12/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
import React from 'react';
// import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

/**
* CharacterLoaderList Component
* 
* @component
* @example
* <CharacterLoaderList/>
*/
const CharacterLoaderList = () => (
    <section>
        <h2 className="section-title">
            <Skeleton duration={1} height={30} width={300} />
        </h2>


    </section>
);
// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
// CharacterLoaderList.propTypes = {
//     props: PropTypes
// };
// --------------------------------------
// Export Component
// --------------------------------------
export default CharacterLoaderList;