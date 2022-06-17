<template>
  <fade-transition>
    <div
      v-if="isOpen"
      v-click-outside="clickOutside"
      class="modal image-on-background"
    >
      <div class="modal__inner">
        <div class="modal__inner-title">
          <span
            class="title"
            v-text="title"
          />
          <icon-button
            class="icon"
            icon="close"
          />
        </div>
        <slot name="content" />
      </div>
    </div>
  </fade-transition>
</template>

<script setup lang="ts">
import { BodyLock } from '@/utils/triggers/BodyTriggers'
import IconButton from '@/components/common/IconButton.vue'
import { ModalNameEventStart } from '@/utils/types/emitter'
import { emitterKey } from '@/global'
import { PropType, defineProps, inject, onMounted, ref } from 'vue'

const props = defineProps({
  modalName: {
    required: true,
    type: String as PropType<ModalNameEventStart>
  },
  title: {
    default: 'Settings',
    type: String
  }
})

const $emitter = inject(emitterKey)
const isOpen = ref(false)

onMounted((): void => {
  $emitter?.on(`${props.modalName}Action`, (value = true) => {
    isOpen.value = value
    BodyLock.trigger(value)
  })
})

const clickOutside = (): void => {
  $emitter?.emit(`${props.modalName}Action`, false)
}

</script>

<style scoped lang="scss">
  .modal {
    border-radius: 25px;
    z-index: 999;
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;
    width: 100%;
    background-position: center center;
    overflow: hidden;

    &__inner {
      background-color: var(--messages-background);
      backdrop-filter: var(--backdrop-blur-filter-20);
      padding: 20px;

      &-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 20px;
        border-bottom: 1px solid var(--in-mesage-background);

        .title {
          font-weight: 600;
          font-size: 20px;
        }
      }
    }
  }
</style>
