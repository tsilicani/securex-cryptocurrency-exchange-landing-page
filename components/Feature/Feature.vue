<template>
  <div class="root">
    <hexagonal />
    <main-feature />
    <more-feature />
  </div>
</template>

<style lang="scss" scoped>
@import './feature-style.scss';
</style>

<script>
import Hexagonal from '../Parallax/Hexagonal'
import MainFeature from './MainFeature'
import MoreFeature from './MoreFeature'

export default {
  components: {
    Hexagonal,
    MainFeature,
    MoreFeature
  }
}
</script>
