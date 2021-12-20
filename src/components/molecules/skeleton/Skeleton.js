/* ==========================================================================
** Skeleton Demo to manage loading screens
** 17/12/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';
import 'react-loading-skeleton/dist/skeleton.css';

// import PropTypes from 'prop-types';
/**
* Skeleton Component
* 
* @component
* @example
* <Skeleton/>
*/
const SkeletonLoader = ({ loaderType = 'text' }) => {

    if (loaderType === 'image')
        return <Skeleton circle height="100%" containerClassName="avatar-skeleton" />;

    return <Skeleton width={70} />;

};

// -------------------------------------- 
// Default Props
// -------------------------------------- 
Skeleton.propTypes = {
    loaderType: 'text'
};


// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
Skeleton.propTypes = {
    loaderType: PropTypes.string
};
// --------------------------------------
// Export Component
// --------------------------------------
export default SkeletonLoader;