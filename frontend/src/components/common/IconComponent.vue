<template>
  <span class="icon material-symbols-outlined">
    {{ name }}
  </span>
</template>

<script>
export default {
  name: 'IconComponent',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .icon {
    user-select: none;
    font-size: inherit;
  }
</style>
