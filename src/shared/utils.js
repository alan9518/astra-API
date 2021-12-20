/* ==========================================================================
** Re usable functions for the app
** 20/12/2021
** Alan Medina Silva
** ========================================================================== */

export const getErrorMessageFromHTTPRequest = (httpResponse) => {

    let message = '';

    if (httpResponse?.error?.response?.status === 404 || httpResponse?.error?.response?.status === '404')
        message = 'No Results Found';
    else
        message = 'Error loading the characters, plese try again later';

    return message;

};