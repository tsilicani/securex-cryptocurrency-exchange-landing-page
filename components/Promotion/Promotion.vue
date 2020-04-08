<template>
  <div class="root">
    <div class="slider-wrap">
      <transition-group :name="transition" tag="div" class="slider-wrap">
        <div v-for="number in [currentImg]" :key="number" :class="[number % 2 ? 'odd' : 'even']" class="item">
          <v-row>
            <v-col lg="4" cols="12" class="hidden-md-and-down">
              &nbsp;
            </v-col>
            <v-col lg="7" cols="12">
              <hidden point="mdDown">
                <section>
                  <div class="img-wrap">
                    <div class="decoration">
                      <svg>
                        <use xlink:href="/images/crypto/deco-promo.svg#main" />
                      </svg>
                    </div>
                    <figure class="image">
                      <img :src="content[Math.abs(currentImg) % content.length].image" :alt="content[Math.abs(currentImg) % content.length].title" />
                    </figure>
                  </div>
                </section>
              </hidden>
              <v-card class="paper">
                <span class="swipper" v-touch:swipe.left="swipeLeft" v-touch:swipe.right="swipeRight" />
                <h1>
                  <v-btn text>
                    {{ content[Math.abs(currentImg) % content.length].title }}
                  </v-btn>
                </h1>
                <p>{{ content[Math.abs(currentImg) % content.length].desc }}</p>
                <section class="time">
                  <h6 class="use-text-caption">
                    <span>
                      {{ $t('cryptoLanding.promo_periode') }}
                      :&nbsp;
                      {{ content[Math.abs(currentImg) % content.length].date }}
                    </span>
                  </h6>
                </section>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </transition-group>
      <a href="javascript:void(0)" class="prev" @click="prev">
        <v-icon>mdi-arrow-left</v-icon>
      </a>
      <a href="javascript:void(0)" class="next" @click="next">
        <v-icon>mdi-arrow-right</v-icon>
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import './promotion-style.scss';

</style>
<script>
import imgAPI from '~/static/images/imgAPI'
import Hidden from '../Hidden'

const sliderData = [{
    image: imgAPI.crypto[0],
    title: 'Blockchain World Summit',
    desc: 'The first world event on the blockchain.',
    date: '12 Jul - 10 Aug'
  },
  {
    image: imgAPI.crypto[1],
    title: 'AwxCoin is now listed',
    desc: 'AwxCoin (AWX) is now tradable on Securex exchange.',
    date: '12 Jul - 10 Aug'
  }
  // {
  //   image: imgAPI.crypto[2],
  //   title: 'Pellentesque ac bibendum tortor',
  //   desc:
  //     'Sed imperdiet enim ligula vitae viverra. Vivamus sit amet interdum elit.',
  //   date: '12 Jul - 10 Aug'
  // },
  // {
  //   image: imgAPI.crypto[3],
  //   title: 'Pellentesque ac bibendum tortor',
  //   desc:
  //     'Sed imperdiet enim ligula vitae viverra. Vivamus sit amet interdum elit.',
  //   date: '12 Jul - 10 Aug'
  // }
]

export default {
  components: {
    Hidden
  },
  data() {
    return {
      content: sliderData,
      transition: '',
      autoplay: null,
      currentImg: 0
    }
  },
  mounted() {
    this.playSlider()
  },
  beforeDestroy() {
    clearInterval(this.autoplay)
  },
  methods: {
    playSlider() {
      this.autoplay = setInterval(() => {
        this.currentImg = this.currentImg + 1
        this.transition = 'slide-right'
      }, 150000)
    },
    manualPlay() {
      clearInterval(this.autoplay)
      setTimeout(() => {
        this.playSlider()
      }, 1)
    },
    next() {
      this.manualPlay()
      this.currentImg += 1
      this.transition = 'slide-right'
    },
    prev() {
      this.manualPlay()
      this.currentImg -= 1
      this.transition = 'slide-left'
    },
    swipeLeft() {
      this.next()
    },
    swipeRight() {
      this.prev()
    }
  }
}

</script>
