/* ==========================================================================
** Axios Custom Instance
** 16/12/2021
** Alan Medina Silva
** ========================================================================== */
import axios from 'axios';

function axiosPetition(restMethod, endPoint, params = {}, customHeaders = {}) {
    return axios({
        method: restMethod,
        headers: customHeaders,
        url: endPoint,
        data: params
    }).then(response => {
        let data;
        if (!response.ok) {
            if (response.status === 401 || response.status === 404) {
                data = { "statusText": response.statusText, "status": response.status };
            } else {
                data = response;
            }
        } else {
            data = response;
        }
        return data;
    }).catch((err) => {
        console.log("🚀 ~ file: services.js ~ line 26 ~ axiosPetition ~ err", err);
        return { "error": err };
    });
}

export const axiosService = {
    axiosPetition
};