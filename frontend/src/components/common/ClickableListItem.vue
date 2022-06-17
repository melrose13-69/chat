<template>
  <div
    :key="icon"
    class="menu__item"
    @click="$emit(emitAction)"
  >
    <div class="menu__item-icon">
      <icon-component :name="icon" />
    </div>
    <span
      class="menu__item-title"
      v-text="title"
    />
    <div
      v-if="isSwitch"
      class="menu__item-switcher"
    >
      <slot name="switch" />
    </div>
  </div>
</template>

<script>
import IconComponent from '@/components/common/IconComponent'

export default {
  name: 'ClickableListItem',
  components: {
    IconComponent
  },
  props: {
    emitAction: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    isSwitch: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .menu__item {
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    outline: none;
    transition: background-color .3s ease-out;
    user-select: none;

    &-icon {
      background-color: var(--messages-background);
      font-size: 25px;
      display: flex;
      align-items: center;
      margin-right: 10px;
      padding: 5px;
      border-radius: 10px;
      backdrop-filter: var(--backdrop-blur-filter-20);
    }

    &-title {
      font-weight: 600;
    }

    &-switcher {
      margin-left: auto;
    }

    &:hover {
      background-color: var(--messages-background);
    }

    &::before {
      content: '';
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
