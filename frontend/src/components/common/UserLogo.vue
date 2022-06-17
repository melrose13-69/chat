<template>
  <div
    class="logo"
    :style="logoStyles"
    @click="logoClick"
  >
    <div class="logo-content">
      <slot>
        <img :src="logo" alt="logo">
      </slot>
    </div>
  </div>
</template>

<script>
import image from '../../assets/images/user_logo.png'

export default {
  name: 'UserLogo',
  props: {
    clickable: {
      type: Boolean,
      default: false
    },
    logo: {
      type: String,
      default: image
    },
    size: {
      type: Number,
      default: 60
    }
  },
  emits: ['logoClick'],
  computed: {
    logoStyles () {
      const { clickable, size } = this
      const pxSize = `${size}px`
      const cursor = clickable ? 'pointer' : 'default'

      return { cursor, height: pxSize, width: pxSize }
    }
  },
  methods: {
    logoClick () {
      if (this.clickable) {
        this.$emit('logoClick')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .logo {
    font-size: 30px;
    border-radius: 50%;
    border: 1px solid var(--white);
    user-select: none;

    &-content {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        position: absolute;
        width: 100%;
      }
    }
  }
</style>
