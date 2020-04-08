<template>
  <div class="testimonial">
    <v-card class="paper" :class="{ active: active }">
      <v-avatar class="avatar" width="80" height="80" min-width="80">
        <img :src="avatar" alt="avatar" />
      </v-avatar>
      <p class="text">{{ text }}</p>
      <p class="caption-name">
        {{ name }}
        &nbsp;-&nbsp;
        {{ title }}
      </p>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
@import './cards-style.scss';
</style>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
