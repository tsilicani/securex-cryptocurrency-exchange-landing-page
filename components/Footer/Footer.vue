<template>
  <footer class="footer" :class="{ invert: invert }">
    <v-container class="fixed-width">
      <v-row class="spacing6">
        <v-col class="py-md-0 pa-6" md="5" cols="12">
          <div class="logo">
            <img :src="logo" alt="logo">
            <h6>
              {{ brand.crypto.projectName }}
            </h6>
          </div>
          <p class="footer-desc pb-6">
            {{ $t('cryptoLanding.banner_title') }}
          </p>
          <div class="quick-links">
            <h6 class="title-nav mb-2">
              {{ $t('cryptoLanding.footer_link') }}
            </h6>
            <ul>
              <li v-for="(item, index) in footer.description" :key="item">
                <nuxt-link :to="footer.link[index]">
                  {{ item }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </v-col>
        <v-col class="py-md-0 pa-6" md="4" cols="12">
          <v-btn v-for="(item, index) in news" :key="index" text class="blog-item" href="#">
            <span class="figure">
              <img :src="item.img" alt="thumb" />
            </span>
            <span class="list-text">
              <span class="category">
                {{ $t('cryptoLanding.footer_news') }}
              </span>
              <span class="content">
                {{item.text}}
              </span>
            </span>
          </v-btn>
        </v-col>
        <v-col md="3" cols="12" class="py-md-0 px-8 py-6">
          <div class="socmed">
            <v-btn text icon class="button">
              <span class="ion-social-twitter icon" />
            </v-btn>
            <v-btn text icon class="button">
              <span class="ion-social-facebook icon" />
            </v-btn>
            <v-btn text icon class="button">
              <span class="ion-social-instagram icon" />
            </v-btn>
            <v-btn text icon class="button">
              <span class="ion-social-linkedin icon" />
            </v-btn>
          </div>
          <!-- <v-select :items="langList" :value="lang" v-model="lang" label="" outlined class="select-lang" prepend-inner-icon="mdi-web" @change="switchLang(lang)" />
 -->
          <p class="body-2">
            &copy;&nbsp;
            {{ brand.crypto.footerText }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>
<style scoped lang="scss">
@import './footer-style';

</style>
<script>
import logo from '~/static/images/crypto-logo.svg'
import brand from '~/static/text/brand'
import img from '~/static/images/imgAPI'

export default {
  data: () => ({
    logo: logo,
    brand: brand,
    lang: 'en',
    footer: {
      title: 'Quick Links',
      description: ['Resources', 'Blog', 'Tips', 'Privacy policy', 'Terms of use', 'Terms Condition'], // eslint-disable-line
      link: ['#resource', '#another-resource', '#final-resource', '#privacy-policy', '#terms-of-use', '#terms-condition'] // eslint-disable-line
    },
    news: [{
        type: 'news',
        text: 'The bullish market is coming.',
        img: img.crypto[2]
      },
      {
        type: 'news',
        text: 'An interesting day at wall street.',
        img: img.crypto[3]
      },
      {
        type: 'news',
        text: 'ETF blochchain-based are now tradable.',
        img: img.crypto[4]
      }
    ]
  }),
  computed: {
    langList: function() {
      const list = []
      this.$i18n.locales.map(item => {
        list.push({ text: this.$t('common.' + item.code), value: item.code })
      })
      return list
    }
  },
  mounted() {
    this.lang = this.$i18n.locale
  },
  props: {
    invert: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    switchLang: function(val) {
      this.$i18n.setLocale(val)
    }
  }
}

</script>
