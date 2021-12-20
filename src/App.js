/* ==========================================================================
**  App Main Access Point
** Load here routes and global providers
** 15/12/2021
** Alan Medina Silva
** ========================================================================== */

import {
    BrowserRouter,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import WhiteTheme from 'themes/WhiteModeTheme';
import { CharactersProvider } from "providers/CharactersProvider";
import appRoutes from 'router';



const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
}
  body {
    
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: #dce1df47;
  }
`;


const App = () => (

    <>
        <GlobalStyle />
        <CharactersProvider>
            <WhiteTheme>

                <BrowserRouter>
                    <Routes>

                        {
                            appRoutes.map((route) => {
                                if (route.redirect)
                                    return <Route path="*" element={<Navigate to={route.to} />} />
                                return <Route path={route.path} element={route.component} key={route.routeName} />
                            })
                        }
                    </Routes>
                </BrowserRouter>

            </WhiteTheme>
        </CharactersProvider>
    </>
);





export default App;
