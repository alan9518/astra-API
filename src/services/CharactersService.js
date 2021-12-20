/* ==========================================================================
** Rick and Morty API service Controller
** Use this as a middleware to add extra instructions to the api requests
** if nedeed
** 16/12/2021
** Alan Medina Silva
** ========================================================================== */

import { axiosService } from "shared/services";
import endpoints from "api/endpoints";

// ?--------------------------------------
// ? Get all the Characters or character
// ? if and ID is provided
// ? @params {ID} character id not required
// ?--------------------------------------
export const getCharacters = (characterID = null, searchFilter = '', filterOption = '', newPageUrl = '') => {

    // Define the url to call
    let serviceUrl = characterID !== null
        ? `${endpoints.getAllCharacters}/${characterID}`
        : endpoints.getAllCharacters;

    if (filterOption !== '' && searchFilter !== '')
        serviceUrl = `${serviceUrl}?${filterOption}=${searchFilter}`;

    if (newPageUrl !== '')
        serviceUrl = newPageUrl;

    return axiosService.axiosPetition('get', serviceUrl, null, null)
        .then(data => ([data, undefined]))
        .catch(error => {
            Promise.resolve([undefined, error]);
        });

};


// export const getCharactersWithPagination = (nextPageUrl) => axiosService.axiosPetition('get', nextPageUrl, null, null)
//     .then(data => ([data, undefined]))
//     .catch(error => {
//         Promise.resolve([undefined, error]);
//     });


