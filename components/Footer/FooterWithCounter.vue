<template>
  <div class="footer-counter">
    <div class="deco-top back">
      <svg>
        <use xlink:href="/images/crypto/deco-footer.svg#main" />
      </svg>
    </div>
    <div class="deco-top cover">
      <svg>
        <use xlink:href="/images/crypto/deco-footer.svg#main" />
      </svg>
    </div>
    <counter />
    <footer-main />
  </div>
</template>

<style lang="scss" scoped>
@import './footer-style.scss';
</style>

<script>
import Counter from '../Counter'
import Footer from './Footer'

export default {
  components: {
    Counter,
    'footer-main': Footer
  }
}
</script>
