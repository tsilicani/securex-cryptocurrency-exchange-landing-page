<template>
  <div class="counter-wrap">
    <v-container class="max-md">
      <h3 class="use-text-title">
        <span
          v-if="loaded"
          v-countUp:onWindowScroll.once="{
            watchedElId: 'watched_counter',
            startValue: 0,
            endValue: 2,
            options: { duration: 1 }
          }"
        />
        <span
          v-if="loaded"
          v-countUp:onWindowScroll.once="{
            watchedElId: 'watched_counter',
            startValue: 0,
            endValue: 234,
            options: { duration: 1 }
          }"
        />
        <span
          v-if="loaded"
          v-countUp:onWindowScroll.once="{
            watchedElId: 'watched_counter',
            startValue: 0,
            endValue: 567,
            options: { duration: 1 }
          }"
        />
      </h3>
      <p class="use-text-subtitle">
        {{ $t('cryptoLanding.footer_counter') }}
      </p>
      <div id="watched_counter" />
      <div class="call-action">
        <h4 class="use-text-subtitle pb-2">
          {{ $t('cryptoLanding.footer_waiting') }}
        </h4>
        <v-btn :href="routeLink.crypto.register" color="secondary" large class="button">
          {{ $t('cryptoLanding.getstarted') }}
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'counter-style.scss';
</style>

<script>
import link from '~/static/text/link'

export default {
  data() {
    return {
      routeLink: link,
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
