<template>
  <div class="page-wrap">
    <decoration />
    <div class="parallax parallax-left">
      <parallax />
    </div>
    <hidden point="mdUp">
      <div class="logo logo-header">
        <a :href="routerLink.crypto.home">
          <img src="/images/crypto-logo.svg" alt="logo" />
          <p class="use-text-subtitle2">
            {{ brand.crypto.projectName }}
          </p>
        </a>
      </div>
    </hidden>
    <v-container class="max-lg inner-wrap">
      <v-card class="form-box fragment-fadeUp">
        <v-btn
          :href="routerLink.crypto.home"
          icon
          class="backtohome invert"
        >
          <i class="ion-ios-home-outline" />
          <i class="ion-ios-arrow-thin-left" />
        </v-btn>
        <div class="deco-inner">
          <decoration />
        </div>
        <div class="auth-frame">
          <v-row>
            <v-col md="5" cols="12" class="hidden-sm-and-down pa-4">
              <hidden point="smDown">
                <div class="greeting">
                  <div class="logo">
                    <img src="/images/crypto-logo.svg" alt="logo" />
                    <p class="use-text-subtitle2">
                      {{ brand.crypto.projectName }}
                    </p>
                  </div>
                  <h4 class="use-text-title2 pb-2">
                    {{ title }}
                  </h4>
                  <h6 class="use-text-paragraph">
                    {{ subtitle }}
                  </h6>
                  <div class="deco-sm" v-if="loaded">
                    <svg width="55px" height="49px" viewBox="0 0 55 49" version="1.1">
                      <defs>
                        <linearGradient x1="34.4430017%" y1="14.3140713%" x2="131.062329%" y2="100%" id="linearGradient-sm">
                          <stop :stop-color="$vuetify.theme.themes.light.secondary" offset="0%" />
                          <stop :stop-color="$vuetify.theme.themes.light.secondarylight" offset="100%" />
                        </linearGradient>
                      </defs>
                      <g id="Auth-1" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
                        <path d="M3.56921938,35.4705736 C3.56921938,37.4675408 4.62878153,39.3129133 6.34885575,40.3113968 L24.789583,51.0165091 C26.5096572,52.0149927 28.6287815,52.0149927 30.3488557,51.0165091 L48.789583,40.3113968 C50.5096572,39.3129133 51.5692194,37.4675408 51.5692194,35.4705736 L51.5692194,14.0602595 C51.5692194,12.0632028 50.5096572,10.2179199 48.789583,9.21934677 L30.3488557,-1.4857655 C28.6287815,-2.48424909 26.5096572,-2.48424909 24.789583,-1.4857655 L6.34885575,9.21934677 C4.62878153,10.2179199 3.56921938,12.0632028 3.56921938,14.0602595 L3.56921938,35.4705736 Z" id="AuthFill-1" fill="url(#linearGradient-sm)" transform="translate(27.569219, 24.765372) rotate(-330.000000) translate(-27.569219, -24.765372) " />
                      </g>
                    </svg>
                  </div>
                </div>
              </hidden>
            </v-col>
            <v-col md="7" cols="12">
              <div class="form-wrap">
                <slot />
              </div>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './form-style.scss';
</style>

<script>
import brand from '~/static/text/brand'
import routerLink from '~/static/text/link'
import Decoration from './Decoration'
import Parallax from '../Parallax/Hexagonal'
import Hidden from '../Hidden'

export default {
  components: {
    Parallax,
    Decoration,
    Hidden
  },
  data() {
    return {
      loaded: false,
      brand: brand,
      routerLink: routerLink
    }
  },
  mounted() {
    this.loaded = true
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    }
  }
}
</script>
