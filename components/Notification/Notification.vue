<template>
  <v-snackbar
    :timeout="0"
    v-model="snackbar"
    class="notification"
  >
    <div class="action">
      {{ msgNotif }}
    </div>
    <v-btn
      class="button"
      color="secondary"
      @click="snackbar = false"
    >
      {{ $t('common.accept') }}
    </v-btn>
  </v-snackbar>
</template>

<style lang="scss" scoped>
@import './notification-style.scss';
</style>

<script>
import brand from '~/static/text/brand'

export default {
  data() {
    return {
      snackbar: true,
      msgNotif: brand.crypto.notifMsg
    }
  }
}
</script>
