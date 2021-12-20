/* eslint-disable no-unused-vars */
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
  pageIndex,
  numOfPages,
  // pageOptions,
  goToNextPage,
  goToPrevPage,
  goToSelectedPage,
  canGoPrevPage,
  canGoNextPage }) => {



  // ?--------------------------------------
  // ? Change Page Numer
  // ? susbstract 1, because the pages are
  // ? based on index 0, and the view index 1
  // ?--------------------------------------
  // const onPageNumberClick = (event) => {
  //   const { innerHTML } = event.target;
  //   const pageToNavigate = parseInt(innerHTML, 10) - 1;
  //   goToSelectedPage(pageToNavigate);

  // };


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
}

// -------------------------------------- 
// Default Props 
// -------------------------------------- 
Pagination.defaultProps = {
  pageIndex: 0,
  numOfPages: 0,
  // pageOptions: null,
  goToNextPage: null,
  goToPrevPage: null,
  goToSelectedPage: null,
  canGoPrevPage: false,
  canGoNextPage: false
};


// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
Pagination.propTypes = {
  pageIndex: PropTypes.number,
  numOfPages: PropTypes.number,
  // pageOptions: PropTypes.any,
  goToNextPage: PropTypes.any,
  goToPrevPage: PropTypes.any,
  goToSelectedPage: PropTypes.func,
  canGoPrevPage: PropTypes.bool,
  canGoNextPage: PropTypes.bool
};
// --------------------------------------
// Export Component
// --------------------------------------
export default Pagination;