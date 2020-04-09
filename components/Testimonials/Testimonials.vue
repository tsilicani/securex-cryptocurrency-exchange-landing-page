<template>
  <div class="root">
    <v-container :class="{ fixed: isDesktop }">
      <main-title :text="$t('cryptoLanding.testi_title')" align="center" />
      <p class="use-text-subtitle2 text-center">
        {{ $t('cryptoLanding.testi_subtitle') }}
      </p>
      <v-row class="spacing6" justify="center">
        <v-col md="10" cols="12" class="my-6">
          <div class="slider-wrap">
            <div class="carousel" v-if="loaded">
              <v-btn color="primary" text class="nav prev" @click="slickPrev()">
                <i class="ion-ios-arrow-back" />
              </v-btn>
              <slick ref="slider" :options="slickOptions" @afterChange="handleAfterChange">
                <div v-for="(item, index) in testiContent" :key="index" class="item">
                  <div class="test-content">
                    <testi-card :text="item.text" :name="item.name" :title="item.title" :avatar="item.avatar" :active="index === active" />
                  </div>
                </div>
              </slick>
              <v-btn color="primary" text class="nav next" @click="slickNext()">
                <i class="ion-ios-arrow-forward" />
              </v-btn>
            </div>
            <div class="pagination" v-if="loaded">
              <ul>
                <li v-for="index in testiContent.length" :key="index" :class="{ active: active === index}">
                  <button type="button" @click="handleGoTo(index)" />
                </li>
              </ul>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
@import './testi-style.scss';

</style>
<script>
import imgApi from '~/static/images/imgAPI'
import Title from '../Title'
import TestiCard from '../Cards/Testimonial'

const testiContent = [{
    text: 'I have never had a similar experience with other platforms..',
    name: 'John Doe',
    avatar: imgApi.avatar[6],
    title: 'Chief Digital Officer'
  },
  {
    text: 'Technology has taken a significant position on Securex.',
    name: 'Jean Doe',
    avatar: imgApi.avatar[7],
    title: 'Chief Digital Officer'
  },
  {
    text: 'Securex is beautiful.',
    name: 'Jena Doe',
    avatar: imgApi.avatar[1],
    title: 'Graphic Designer'
  },
  {
    text: 'Securex will be disruptive on the cryptocurrency scene.',
    name: 'Jovelin Doe',
    avatar: imgApi.avatar[2],
    title: 'Senior Graphic Designer'
  },
  {
    text: 'Securex offered to represent a special company..',
    name: 'Jihan Doe',
    avatar: imgApi.avatar[3],
    title: 'CEO Software House'
  },
  {
    text: 'Securex offers a unique user experience.',
    name: 'John Doe',
    avatar: imgApi.avatar[9],
    title: 'Senior Graphic Designer'
  }
]

export default {
  components: {
    'main-title': Title,
    TestiCard,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      currentSlide: 0,
      active: 0,
      testiContent: testiContent,
      slickOptions: {
        infinite: true,
        dots: false,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 7000
      }
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    slickNext() {
      this.$refs.slider.next()
    },
    slickPrev() {
      this.$refs.slider.prev()
    },
    handleGoTo(slide) {
      this.$refs.slider.goTo(slide)
    },
    handleAfterChange(event, slick, currentSlide) {
      this.active = currentSlide
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}

</script>
