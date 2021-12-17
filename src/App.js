/* ==========================================================================
**  App Main Access Point
** Load here routes and global providers
** 15/12/2021
** Alan Medina Silva
** ========================================================================== */


import {
    BrowserRouter,
    Route,
    // Navigate,
    Routes
} from "react-router-dom";

import WhiteTheme from 'themes/WhiteModeTheme';
import { CharactersProvider } from "providers/CharactersProvider";
import appRoutes from 'router';


const App = () => (
    <CharactersProvider>
        <WhiteTheme>
            <BrowserRouter>
                <Routes>

                    {
                        appRoutes.map((route) => (
                            <Route path="/" element={route.component} key={route.routeName} />
                        ))
                    }
                </Routes>
            </BrowserRouter>
        </WhiteTheme>
    </CharactersProvider>
);

export default App;
