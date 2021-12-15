/* ==========================================================================
**  App Main Access Point
** Load here routes and global providers
** 15/12/2021
** Alan Medina Silva
** ========================================================================== */

// import React, {Fragment} from "react";
import {
    BrowserRouter,
    Route,
    // Navigate,
    Routes
} from "react-router-dom";
// import { Home } from 'views';
import appRoutes from 'router';
import './App.css';

const App = () => (
    <div>
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                {
                    appRoutes.map((route) => (
                        // if (route.redirect)
                        //     return <Navigate from={route.path} to={route.to} key={route.routeName} />;


                        <Route path="/" element={route.component} />

                    ))
                }
            </Routes>
        </BrowserRouter>
    </div>
);

export default App;
