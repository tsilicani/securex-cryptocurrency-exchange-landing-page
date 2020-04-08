<template>
  <div class="invisible" v-if="loaded">
    <svg width="38px" height="43px" viewBox="0 0 38 43" version="1.1">
      <defs>
        <linearGradient x1="34.5063846%" y1="15.1303808%" x2="20.8153155%" y2="110.664023%" id="titleLinearGradient-1">
          <stop :stop-color="themeDark ? $vuetify.theme.themes.light.primarydark : $vuetify.theme.themes.light.primarylight" offset="0%" />
          <stop :stop-color="themeDark ? $vuetify.theme.themes.light.secondarydark : $vuetify.theme.themes.light.secondarylight" offset="100%" />
        </linearGradient>
      </defs>
      <defs>
        <linearGradient x1="66.8412844%" y1="30.62426%" x2="-21.0581447%" y2="100%" id="hexaLinearGradient-3">
          <stop :stop-color="$vuetify.theme.themes.light.secondary" offset="0%" />
          <stop :stop-color="$vuetify.theme.themes.light.secondarylight" offset="100%" />
        </linearGradient>
      </defs>
      <defs>
        <linearGradient x1="66.8412844%" y1="30.62426%" x2="-21.0581447%" y2="100%" id="hexaLinearGradient-2">
          <stop :stop-color="$vuetify.theme.themes.light.primary" offset="0%" />
          <stop :stop-color="$vuetify.theme.themes.light.primarylight" offset="100%" />
        </linearGradient>
      </defs>
      <defs>
        <linearGradient x1="33.650521%" y1="14.3140713%" x2="18.9688557%" y2="110.664023%" id="frmDecoLinearGradient-1">
          <stop :stop-color="themeDark ? $vuetify.theme.themes.light.primarydark : $vuetify.theme.themes.light.primary" offset="0%" />
          <stop :stop-color="themeDark ? $vuetify.theme.themes.light.secondarydark : $vuetify.theme.themes.light.secondary" offset="100%" />
        </linearGradient>
        <path d="M40.0268505,351.888258 C299.475775,-137.933311 505.867463,-306.185765 659.201915,-152.869104 C788.709519,-23.376527 935.329477,275.20658 1099.06179,742.880218 C1145.23269,874.759604 1075.75224,1019.09788 943.872862,1065.26879 C895.054476,1082.36009 842.170492,1084.07787 792.345858,1070.19072 L372.341154,953.126774 C318.012942,937.984384 270.301991,905.123239 236.786543,859.762889 L60.1185534,620.657575 C2.28750686,542.3881 -5.52448856,437.886026 40.0268505,351.888258 Z" id="path-2" />
      </defs>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.invisible {
  position: absolute;
  top: 0;
  left: 0;
}
</style>

<script>
import colors from 'vuetify/lib/util/colors'

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

const theme = {
  ...palette.deepBlue
}

export default {
  data: () => ({
    loaded: false
  }),
  mounted() {
    this.loaded = true
    this.$vuetify.theme.themes = {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    }
  },
  computed: {
    themeDark() {
      return this.$vuetify.theme.dark
    }
  }
}
</script>
