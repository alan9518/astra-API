/* ==========================================================================
** Router Definition
** THis file call the Views components and manages the paths of the app 'views'
** 15/12/2021
** Alan Medina Silva
** ========================================================================== */

// import {Home} from 'views';
import { Home } from 'views';
// const appPath = '';

const appRoutes = [
    {
        path: '/',
        component: <Home />,
        routeName: 'homePage',
        exact: true
    }
];


export default appRoutes;
