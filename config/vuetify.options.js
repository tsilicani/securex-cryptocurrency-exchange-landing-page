import colors from 'vuetify/lib/util/colors'

let darkMode = false
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('luxiDarkMode') || false
}

const palette = {
  deepBlue: {
    primary: colors.indigo.base, // primary main
    primarylight: colors.indigo.lighten5, // primary light
    primarydark: colors.indigo.darken3, // primary dark
    secondary: colors.lightBlue.base, // secondary main
    secondarylight: colors.lightBlue.lighten5, // secondary light
    secondarydark: colors.lightBlue.darken3, // secondary dark
    anchor: colors.indigo.base // link
  }
}

export const theme = {
  ...palette.deepBlue
}

export default {
  rtl: false,
  theme: {
    dark: darkMode === 'true',
    themes: {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    },
    options: {
      customProperties: true
    }
  }
}
