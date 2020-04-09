<template>
  <div class="root">
    <div class="parallax">
      <hexagonal />
    </div>
    <v-container class="fixed-width">
      <v-row class="spacing6">
        <v-col md="6" class="pa-6">
          <title-main :text="$t('cryptoLanding.faq_title')" :align="isMobile ? 'center' : 'left'" />
          <p class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-left']">
            {{ $t('cryptoLanding.faq_subtitle') }}
          </p>
          <hidden point="smDown">
            <div class="illustration">
              <img src="/images/crypto/faq.png" alt="illustration" />
            </div>
          </hidden>
        </v-col>
        <v-col md="6" cols="12" class="pa-6">
          <div class="accordion">
            <v-expansion-panels v-model="panel" active-class="expanded">
              <v-expansion-panel v-for="(item, index) in faqData" :key="index" class="paper">
                <v-expansion-panel-header class="content">
                  <span class="heading">
                    {{ item.q }}
                  </span>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="detail">
                  <span>
                    {{ item.a }}
                  </span>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
@import 'faq-style.scss';

</style>
<script>
import Hidden from '../Hidden'
import Hexagonal from '../Parallax/Hexagonal'
import Title from '../Title'

const faqData = [{
    q: 'Is Securex a decentralized platform?',
    a: 'Yes, Securex is a blockchain-based echange.'
  },
  {
    q: 'Can i trade Monero here?',
    a: 'Yes Monero is listed here. '
  },
  {
    q: 'The withdrawals are free of charge?',
    a: 'Yes there are no costs. '
  },
  {
    q: 'Can i deposit fiat currencies here?',
    a: 'Yes you can deposit USD EUR and AUD.'
  },
  {
    q: 'There are cold wallets here?',
    a: 'Yes you can deposit your currencies in various type of cold wallets. '
  }
]

export default {
  components: {
    Hidden,
    Hexagonal,
    'title-main': Title
  },
  data() {
    return {
      panel: 0,
      faqData: faqData
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}

</script>
