<template>
  <div class="root">
    <div class="canvas-wrap">
      <div class="overlay">
        <div class="deco-inner">
          <div id="particles_backgrond" class="particle-background" />
        </div>
      </div>
    </div>
    <v-container class="fixed-width">
      <div class="banner-wrap">
        <v-row align="center" class="spacing6">
          <v-col md="8" cols="12" class="pa-6">
            <div class="text">
              <h4 class="use-text-title2">
                {{ $t('cryptoLanding.banner_title') }}
              </h4>
              <p class="use-text-subtitle2">
                {{ $t('cryptoLanding.banner_subtitle') }}
              </p>
            </div>
            <div class="btn-area">
              <v-btn :block="isMobile" large color="secondary">
                {{ $t('cryptoLanding.banner_getstarted') }}
              </v-btn>
              <v-btn :block="isMobile" large outlined class="invert">
                {{ $t('cryptoLanding.banner_viewmarket') }}
              </v-btn>
            </div>
          </v-col>
          <v-col md="4" cols="12" class="pa-6">
            <figure class="object-art">
              <img src="/images/crypto/banner-art.png" alt="illustration" />
            </figure>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <div class="deco-bottom back">
      <svg>
        <use xlink:href="/images/crypto/deco-banner.svg#main" />
      </svg>
    </div>
    <div class="deco-bottom cover">
      <svg>
        <use xlink:href="/images/crypto/deco-banner.svg#main" />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './banner-style.scss';
</style>

<script>
export default {
  mounted() {
    setTimeout(() => {
      window.particlesJS('particles_backgrond', {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#ffffff'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            },
            polygon: {
              nb_sides: 5
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 6,
              rotateY: 12
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: false,
              mode: 'repulse'
            },
            onclick: {
              enable: false,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: false
      })
    }, 1000)
  },
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
