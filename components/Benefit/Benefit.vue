<template>
  <div class="root">
    <div class="parallax-img">
      <hidden point="smDown">
        <v-parallax
          :src="img.crypto[5]"
          :height="540"
          alt="parallax-bg"
        >
          <div class="parallax-props" />
        </v-parallax>
      </hidden>
    </div>
    <v-container :class="{ 'fixed-width' : isDesktop}">
      <div class="wrapper">
        <v-row>
          <v-col md="5" cols="12" class="pa-md-0">
            <div class="desc">
              <h3 class="use-text-title2" :class="[isMobile ? 'text-center' : 'text-left']">
                {{ $t('cryptoLanding.benefit_title') }}
              </h3>
              <ul class="list">
                <li>Vestibulum faucibus</li>
                <li>Vivamus sit amet interdum elit</li>
                <li>Donec dignissim</li>
                <li>Quisque lacinia purus</li>
                <li>Fusce placerat enim et odio molestie</li>
                <li>Pellentesque ac bibendum tortor</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>And more…</li>
              </ul>
            </div>
          </v-col>
          <v-col md="7" cols="12">
            <div>
              <figure class="img">
                <img :src="img.crypto[6]" alt="benefit" />
              </figure>
            </div>
            <hidden point="mdDown">
              <div class="deco" v-if="loaded">
                <svg width="585px" height="151px" viewBox="0 0 585 151" version="1.1">
                  <defs>
                    <linearGradient x1="66.8412844%" y1="30.62426%" x2="-21.0581447%" y2="100%" id="benefitLinearGradient-2">
                      <stop :stop-color="$vuetify.theme.themes.light.primary" offset="0%" />
                      <stop :stop-color="$vuetify.theme.themes.light.primarylight" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="66.8412844%" y1="30.62426%" x2="-21.0581447%" y2="100%" id="benefitLinearGradient-3">
                      <stop :stop-color="$vuetify.theme.themes.light.secondary" offset="0%" />
                      <stop :stop-color="$vuetify.theme.themes.light.secondarylight" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g id="Benefit-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Benefit-2" transform="translate(-143.000000, -88.000000)">
                      <g id="Benefit-3" transform="translate(132.623862, 70.912032)">
                        <path d="M15,67.3628158 C15,70.2420142 16.5400613,72.9026456 19.0401691,74.3422448 L45.8435518,89.7767212 C48.3436597,91.2163204 51.4237822,91.2163204 53.9238901,89.7767212 L80.7272727,74.3422448 C83.2273806,72.9026456 84.7674419,70.2420142 84.7674419,67.3628158 L84.7674419,36.4937339 C84.7674419,33.6144064 83.2273806,30.9539041 80.7272727,29.5141758 L53.9238901,14.0796994 C51.4237822,12.6401002 48.3436597,12.6401002 45.8435518,14.0796994 L19.0401691,29.5141758 C16.5400613,30.9539041 15,33.6144064 15,36.4937339 L15,67.3628158 Z" id="BenefitFill-1" fill="url(#benefitLinearGradient-3)" transform="translate(49.883721, 51.928210) rotate(-330.000000) translate(-49.883721, -51.928210)" />
                        <path d="M520.561173,148.252603 C520.561173,151.131802 522.101234,153.792433 524.601342,155.232033 L551.404725,170.666509 C553.904833,172.106108 556.984955,172.106108 559.485063,170.666509 L586.288446,155.232033 C588.788553,153.792433 590.328615,151.131802 590.328615,148.252603 L590.328615,117.383522 C590.328615,114.504194 588.788553,111.843692 586.288446,110.403963 L559.485063,94.9694871 C556.984955,93.5298879 553.904833,93.5298879 551.404725,94.9694871 L524.601342,110.403963 C522.101234,111.843692 520.561173,114.504194 520.561173,117.383522 L520.561173,148.252603 Z" id="BenefitFill-2" fill="url(#benefitLinearGradient-2)" transform="translate(555.444894, 132.817998) rotate(-330.000000) translate(-555.444894, -132.817998)" />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </hidden>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './benefit-style.scss';
</style>

<script>
import Title from '../Title'
import Hidden from '../Hidden'
import imgAPI from '~/static/images/imgAPI'

export default {
  components: {
    Hidden,
    'main-title': Title
  },
  data() {
    return {
      loaded: false,
      img: imgAPI
    }
  },
  mounted() {
    this.loaded = true
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
