/* ==========================================================================
** Pagination Component 
** 20/12/2021
** Alan Medina Silva
** ========================================================================== */

// --------------------------------------
// Get Dependences
// --------------------------------------
import React from 'react';
import PropTypes from 'prop-types';

import { Title } from 'components/atoms';
import { PaginationContainerStyled } from './paginationStyled';

/**
* Pagination Component
* 
* @component
* @example
* <Pagination/>
*/
const Pagination = ({
  goToNextPage,
  goToPrevPage,
  goToSelectedPage,
}) => {




  const onPrevPageClick = () => {
    goToSelectedPage(goToPrevPage);
  };


  const onNextPageClick = () => {

    goToSelectedPage(goToNextPage);

  };



  return (
    <PaginationContainerStyled >
      {
        // ? < Prev Page
        goToPrevPage !== null &&
        <Title
          titleText="<"
          size='span'
          onClick={onPrevPageClick}
        />
      }

      {
        // ? > Next Page
        goToNextPage !== null &&
        <Title
          titleText=">"
          size="span"
          onClick={onNextPageClick}
        />
      }

    </PaginationContainerStyled>
  );
};

// -------------------------------------- 
// Default Props 
// -------------------------------------- 
Pagination.defaultProps = {
  goToNextPage: null,
  goToPrevPage: null,
  goToSelectedPage: null,

};


// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
Pagination.propTypes = {
  goToNextPage: PropTypes.any,
  goToPrevPage: PropTypes.any,
  goToSelectedPage: PropTypes.func,
};
// --------------------------------------
// Export Component
// --------------------------------------
export default Pagination;