<template>
  <div class="input">
    <icon-component
      v-if="icon"
      class="input__icon"
      :name="icon"
    />
    <input
      v-model="value"
      :type="type"
      :placeholder="placeholder"
      class="input__area"
      @input="emit('update:modelValue')"
    >
  </div>
</template>

<script setup lang="ts">
import IconComponent from '@/components/common/IconComponent.vue'
import { defineEmits, ref } from 'vue'

const props = defineProps({
  icon: {
    default: '',
    type: String
  },
  modelValue: {
    default: '',
    type: String
  },
  placeholder: {
    default: '',
    type: String
  },
  type: {
    default: 'text',
    type: String
  }
})

const emit = defineEmits(['update:modelValue'])

const value = ref(props.modelValue)

</script>

<style scoped lang="scss">
  .input {
    position: relative;
    display: grid;
    padding: 10px 0;

    &__icon {
      position: absolute;
      top: 50%;
      left: 15px;
      transform: translate(0, -50%);
      font-size: 30px;
      z-index: 1;
    }

    &__area {
      background-color: var(--input-background);
      border-radius: 25px;
      padding: 10px 10px 10px 60px;
    }
  }
</style>
