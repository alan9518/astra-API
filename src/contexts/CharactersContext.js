/* ==========================================================================
** Characters Context
** This allows to use the state of the useCharacters hook across the entire app
** 16/12/2021
** Alan Medina Silva
** ========================================================================== */

import { useContext, createContext } from "react";

export const CharactersContext = createContext();

export const useCharactersDataContext = () => {
    const context = useContext(CharactersContext);


    if (context === undefined) {
        throw new Error(
            "useAdsDataContext must be used within auseAdsDataProvider"
        );
    }

    return context;
};