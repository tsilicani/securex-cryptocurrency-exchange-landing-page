<template>
  <div class="market">
    <slick :options="slickOptions">
      <div
        v-for="(item, index) in marketList"
        :key="index"
        class="item"
      >
        <div class="coin">
          <v-avatar class="logo" height="20" width="20" min-width="20">
            <img :src="item.logo" :alt="item.name" /> 
          </v-avatar>
          {{ item.name }}
          {{ item.price }}
          (<span v-if="item.status === 'down'" class="down">
            <i>▼</i>{{ item.percent }}%
          </span>
          <span v-if="item.status === 'up'" class="up">
            <i>▲</i>{{ item.percent }}%
          </span>
          <span v-if="item.status === 'stay'" class="stay">
            <i>-</i>{{ item.percent }}%
          </span>)
        </div>
      </div>
    </slick>
  </div>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
const marketList = [
  {
    logo: '/images/crypto/btc.png',
    name: 'BTC',
    price: 1020,
    status: 'up',
    percent: 8
  },
  {
    logo: '/images/crypto/xrp.png',
    name: 'XRP',
    price: 0.003,
    status: 'down',
    percent: 3
  },
  {
    logo: '/images/crypto/nem.png',
    name: 'NEM',
    price: 0.03,
    status: 'up',
    percent: 8
  },
  {
    logo: '/images/crypto/iot.png',
    name: 'IOTA',
    price: 0.01,
    status: 'down',
    percent: 3
  },
  {
    logo: '/images/crypto/mnr.png',
    name: 'MNR',
    price: 1.45,
    status: 'up',
    percent: 8
  },
  {
    logo: '/images/crypto/byc.png',
    name: 'BYC',
    price: 22.34,
    status: 'down',
    percent: 3
  },
  {
    logo: '/images/crypto/iot.png',
    name: 'IOTA',
    price: 0.01,
    status: 'down',
    percent: 3
  },
  {
    logo: '/images/crypto/mnr.png',
    name: 'MNR',
    price: 1.45,
    status: 'up',
    percent: 8
  },
  {
    logo: '/images/crypto/byc.png',
    name: 'BYC',
    price: 22.34,
    status: 'down',
    percent: 3
  }
]

export default {
  components: {
    Slick: () => import('vue-slick')
  },
  data: () => ({
    marketList: marketList,
    loaded: false,
    slickOptions: {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 300,
      cssEase: 'linear',
      pauseOnHover: true
    }
  }),
  mounted() {
    this.loaded = true
  }
}
</script>
