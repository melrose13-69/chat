<template>
  <button
    class="icon-button"
    @click="$emit('buttonClick')"
  >
    <icon-component :name="icon" />
  </button>
</template>

<script>
import IconComponent from '@/components/common/IconComponent'

export default {
  name: 'IconButton',
  components: { IconComponent },
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  emits: ['buttonClick']
}
</script>

<style scoped lang="scss">
  .icon-button {
    display: flex;
    font-size: 25px;
    cursor: pointer;
    transition: opacity .3s ease-in-out;

    &:hover {
      opacity: .8;
    }
  }
</style>
