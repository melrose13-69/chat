<template>
  <div class="switcher">
    <label class="switcher__inner">
      <input
        :checked="modelValue"
        type="checkbox"
        @input="onInput"
      >
      <span class="slider" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'SwitchComponent',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  methods: {
    onInput () {
      console.log(1)
      this.$emit('update:modelValue')
    }
  }
}
</script>

<style scoped lang="scss">
  .switcher {
    display: grid;
    width: 50px;
    height: 26px;

    &__inner {
      display: grid;
      cursor: pointer;
    }

    .slider {
      position: relative;
      background-color: rgb(192, 192, 192);
      border-radius: 20px;
      transition: background-color .3s ease-in-out;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 4px;
        transform: translate(0, -50%);
        border-radius: 50%;
        background-color: #fff;
        width: 16px;
        height: 16px;
        transition: left .3s ease-in-out;
      }
    }

    input:checked + .slider {
      background-color: var(--out-message-background);
    }

    input:checked + .slider::before {
      left: 30px;
    }

    input {
      display: none;
    }
  }
</style>
