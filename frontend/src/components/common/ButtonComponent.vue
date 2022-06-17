<template>
  <button
    class="button"
    v-text="text"
  />
</template>

<script setup lang="ts">
defineProps({
  text: {
    required: true,
    type: String
  }
})
</script>

<style scoped lang="scss">
  .button {
    background-color: var(--primary-backgound);
    padding: 10px 20px;
    border-radius: 20px;
    font-weight: 600;
    transition: all .3s ease-in-out;

    &:hover {
      box-shadow: 0 0 28px var(--secondary-background) inset;
    }
  }
</style>
