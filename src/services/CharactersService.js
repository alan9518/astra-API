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
export const getCharacters = (characterID = null) => {

    // Define the url to call
    const serviceUrl = characterID !== null
        ? `${endpoints.getAllCharacters}/${characterID}`
        : endpoints.getAllCharacters;

    return axiosService.axiosPetition('get', serviceUrl, null, null)
        .then(data => ([data, undefined]))
        .catch(error => {
            Promise.resolve([undefined, error]);
        });

}