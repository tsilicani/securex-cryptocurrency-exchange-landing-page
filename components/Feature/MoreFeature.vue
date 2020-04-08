<template>
  <div class="more-feature">
    <v-container :class="{ fixed: isDesktop }">
      <div class="item">
        <u-animate-container>
          <v-row
            align="center"
            class="spacing6"
          >
            <v-col md="6" cols="12" class="py-md-0 px-6">
              <div class="text" :class="{ 'text-center': isMobile }">
                <span class="ion-ios-locked-outline" />
                <main-title
                  :text="$t('cryptoLanding.morefeature_title1')"
                  :align="isMobile ? 'center' : 'left'"
                />
                <p
                  :class="isMobile ? 'text-center' : 'text-left'"
                  class="use-text-subtitle2"
                >
                  {{ $t('cryptoLanding.morefeature_subtitle1') }}
                </p>
              </div>
            </v-col>
            <v-col md="6" cols="12" class="py-md-0 px-6">
              <u-animate
                name="fadeInLeftShort"
                delay="0.3s"
                duration="0.3s"
              >
                <figure class="illustration">
                  <img src="/images/crypto/illustration1.png" alt="feature" />
                </figure>
              </u-animate>
            </v-col>
          </v-row>
        </u-animate-container>
      </div>
      <div class="item">
        <u-animate-container>
          <v-row class="spacing6" :class="[isMobile ? 'column-reverse' : 'row']" align="center">
            <v-col md="6" cols="12" class="py-md-0 px-6">
              <div class="text text-right">
                <u-animate
                  :offset="-100"
                  name="fadeInRightShort"
                  delay="0.3s"
                  duration="0.3s"
                >
                  <figure class="illustration">
                    <img src="/images/crypto/illustration2.png" alt="feature" />
                  </figure>
                </u-animate>
              </div>
            </v-col>
            <v-col md="6" cols="12" class="py-md-0 px-6">
              <div class="text" :class="{ 'text-center': isMobile }">
                <span class="ion-ios-analytics-outline" />
                <main-title
                  :text="$t('cryptoLanding.morefeature_title2')"
                  :align="isMobile ? 'center' : 'left'"
                />
                <p
                 :class="isMobile ? 'text-center' : 'text-left'"
                 class="use-text-subtitle2"
                >
                  {{ $t('cryptoLanding.morefeature_subtitle2') }}
                </p>
              </div>
            </v-col>
          </v-row>
        </u-animate-container>
      </div>
      <div class="item" id="statistic" v-if="loaded">
        <v-row>
          <v-col cols="12" v-scroll="handleScroll">
            <div class="text text-center">
              <span class="ion-ios-bolt-outline" />
              <main-title
                :text="$t('cryptoLanding.morefeature_title3')"
                align="center"
              />
              <p class="text-center use-text-subtitle2">
                {{ $t('cryptoLanding.morefeature_subtitle3') }}
              </p>
            </div>
            <v-container class="max-md">
              <ul class="progress-wrap">
                <li
                  v-for="(item, index) in coinData"
                  :key="index"
                >
                  <div class="coin">
                    <v-avatar class="logo">
                      <img :src="item.logo" :alt="item.name" />
                    </v-avatar>
                    <h5 class="headline">
                      {{ item.name }}
                    </h5>
                  </div>
                  <div class="progress">
                    <div class="unit">
                      <h6 class="title">
                        <span>USD</span>
                        &nbsp;5.000
                      </h6>
                      <h6 class="title">
                        <span>USD</span>
                        &nbsp;15.000
                      </h6>
                    </div>
                    <v-progress-linear
                      :color="item.color"
                      :value="play ? item.progress : 0"
                      class="track"
                    />
                  </div>
                </li>
              </ul>
            </v-container>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './feature-style.scss';
</style>

<script>
import Title from '../Title'

const coinData = [
  {
    name: 'BTC',
    logo: '/images/crypto/btc.png',
    progress: 75,
    color: '#FBA630'
  },
  {
    name: 'DASH',
    logo: '/images/crypto/dash.png',
    progress: 40,
    color: '#21D3D7'
  },
  {
    name: 'NAN',
    logo: '/images/crypto/nan.png',
    progress: 90,
    color: '#548CCC'
  },
  {
    name: 'MNR',
    logo: '/images/crypto/mnr.png',
    progress: 35,
    color: '#FF6602'
  },
  {
    name: 'IOT',
    logo: '/images/crypto/iot.png',
    progress: 80,
    color: '#CE07D4'
  }
]

export default {
  components: {
    'main-title': Title
  },
  data: () => ({
    loaded: false,
    play: false,
    coinData: coinData
  }),
  mounted() {
    this.loaded = true
  },
  computed: {
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    },
    offsetTop: function() {
      const elm = document.getElementById('statistic')
      return elm.getBoundingClientRect().y
    }
  },
  methods: {
    handleScroll: function() {
      const top = this.offsetTop - window.innerHeight + 300
      if (window.scrollY > top) {
        return (this.play = true)
      }
      return false
    }
  }
}
</script>
