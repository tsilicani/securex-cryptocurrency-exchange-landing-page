import Vue from 'vue'

import {
  getMatchedComponentsInstances,
  promisify,
  globalHandleError
} from './utils'

import NuxtError from '../layouts/error.vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../assets/transition.scss'

import '../assets/vuetify-overide.scss'

import '../assets/vendors/animate.css'

import '../assets/vendors/animate-extends.css'

import '../assets/vendors/hamburger-menu.css'

import '../assets/vendors/slick-carousel/slick.css'

import '../assets/vendors/slick-carousel/slick-theme.css'

import _6f6c098b from '../layouts/default.vue'

const layouts = { "_default": _6f6c098b }

export default {
  head: {"htmlAttrs":{"dir":"ltr"},"title":"Securex","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"description","content":"Securex Cryptocurrency Exchange - Blockchain Platform"},{"name":"msapplication-TileColor","content":"#FFFFFF"},{"name":"msapplication-TileImage","content":"\u002Ffavicons\u002Fms-icon-144x144.png"},{"name":"theme-color","content":"#3f51b5"},{"property":"author","content":"luxi"},{"property":"og:site_name","content":"luxi.ux-maestro.com"},{"property":"og:locale","content":"en_US"},{"property":"og:type","content":"website"},{"property":"twitter:site","content":"luxi.ux-maestro.com"},{"property":"twitter:domain","content":"luxi.ux-maestro.com"},{"property":"twitter:creator","content":"luxi"},{"property":"twitter:card","content":"summary"},{"property":"twitter:image:src","content":"\u002Fimages\u002Flogo.png"},{"property":"og:url","content":undefined},{"property":"og:title","content":"Securex"},{"property":"og:description","content":"Securex Cryptocurrency Exchange - Blockchain Platform"},{"name":"twitter:site","content":undefined},{"name":"twitter:card","content":"summary_large_image"},{"name":"twitter:image","content":"\u002Fstatic\u002Fimages\u002Fcrypto-logo.png"},{"property":"og:image","content":"\u002Fstatic\u002Fimages\u002Fcrypto-logo.png"},{"property":"og:image:width","content":"1200"},{"property":"og:image:height","content":"630"}],"link":[{"rel":"shortcut icon","href":"\u002Ffavicons\u002Ffavicon.ico"},{"rel":"apple-touch-icon","sizes":"57x57","href":"\u002Ffavicons\u002Fapple-icon-57x57.png"},{"rel":"apple-touch-icon","sizes":"60x60","href":"\u002Ffavicons\u002Fapple-icon-60x60.png"},{"rel":"apple-touch-icon","sizes":"72x72","href":"\u002Ffavicons\u002Fapple-icon-72x72.png"},{"rel":"apple-touch-icon","sizes":"76x76","href":"\u002Ffavicons\u002Fapple-icon-76x76.png"},{"rel":"apple-touch-icon","sizes":"114x114","href":"\u002Ffavicons\u002Fapple-icon-114x114.png"},{"rel":"apple-touch-icon","sizes":"120x120","href":"\u002Ffavicons\u002Fapple-icon-120x120.png"},{"rel":"apple-touch-icon","sizes":"144x144","href":"\u002Ffavicons\u002Fapple-icon-144x144.png"},{"rel":"apple-touch-icon","sizes":"152x152","href":"\u002Ffavicons\u002Fapple-icon-152x152.png"},{"rel":"apple-touch-icon","sizes":"180x180","href":"\u002Ffavicons\u002Fapple-icon-180x180.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"192x192","href":"\u002Ffavicons\u002Fandroid-icon-192x192.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"32x32","href":"\u002Ffavicons\u002Ffavicon-32x32.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"96x96","href":"\u002Ffavicons\u002Ffavicon-96x96.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"16x16","href":"\u002Ffavicons\u002Ffavicon-16x16.png"},{"rel":"manifest","href":"\u002Ffavicons\u002Fmanifest.json"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Montserrat:400,500,600&display=swap"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Ficon?family=Material+Icons"},{"rel":"stylesheet","href":"http:\u002F\u002Fcode.ionicframework.com\u002Fionicons\u002F2.0.1\u002Fcss\u002Fionicons.min.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"}],"style":[],"script":[]},

  render (h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })

    if (this.nuxt.err && NuxtError) {
      const errorLayout = (NuxtError.options || NuxtError).layout
      if (errorLayout) {
        this.setLayout(
          typeof errorLayout === 'function'
            ? errorLayout.call(NuxtError, this.context)
            : errorLayout
        )
      }
    }

    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter (el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [templateEl])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,

      transitionEl
    ])
  },

  data: () => ({
    isOnline: true,

    layout: null,
    layoutName: ''
  }),

  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this

      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
    // Add $nuxt.context
    this.context = this.$options.context
  },

  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline () {
      return !this.isOnline
    }
  },

  methods: {
    refreshOnlineStatus () {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    async refresh () {
      const pages = getMatchedComponentsInstances(this.$route)

      if (!pages.length) {
        return
      }
      this.$loading.start()

      const promises = pages.map((page) => {
        const p = []

        if (page.$options.fetch) {
          p.push(promisify(page.$options.fetch, this.context))
        }

        if (page.$options.asyncData) {
          p.push(
            promisify(page.$options.asyncData, this.context)
              .then((newData) => {
                for (const key in newData) {
                  Vue.set(page.$data, key, newData[key])
                }
              })
          )
        }

        return Promise.all(p)
      })
      try {
        await Promise.all(promises)
      } catch (error) {
        this.$loading.fail()
        globalHandleError(error)
        this.error(error)
      }
      this.$loading.finish()
    },

    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) {
          this.$loading.fail()
        }
        if (this.$loading.finish) {
          this.$loading.finish()
        }
      }
    },

    setLayout (layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },

  components: {
    NuxtLoading
  }
}
