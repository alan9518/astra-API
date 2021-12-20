/* ==========================================================================
** App Theme using Styled Components
** Use the default as the white theme, in case of needing a dark theme
** 15/12/2021
** Alan Medina Silva
** ========================================================================== */

import React from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from 'prop-types';
import colors from './Colors';


const theme = {
    colors: {
        baseColor: colors.base,
        mainColor: colors.main,
        accentColor: colors.accent,
        whiteText: colors.whiteText,
    },
    fonts: { main: "Roboto", base: "Lato" },
    fontSizes: {
        extraSmall: "0.8em",
        small: "1em",
        medium: "1.2em",
        big: "2em",
        extraBig: "4em"
    },
    borderRadius: '5px',
    borderRadiusBig: '16px',
    hoverBoxShadow: '0 4px 5px rgba(0, 0, 0, 0.2)'

};

const WhiteTheme = ({ children }) =>
    (<ThemeProvider theme={theme}> {children}  </ThemeProvider>)


WhiteTheme.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default WhiteTheme;