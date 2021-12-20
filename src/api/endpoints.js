/* ==========================================================================
** API Endpoints Definition
** This File Holds all the routes that connect the REST Api
** 15/12/2021
** Alan Medina Silva
** ========================================================================== */

const apiDomain = process.env.REACT_APP_API_DOMAIN

const endpoints = {

    // get all the characters
    // Verbose : GET
    // To get a single character ad the character's id
    // To filter character add like this
    // /?name=rick&status=alive
    getAllCharacters: `${apiDomain}/character`

};


export default endpoints;