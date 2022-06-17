<template>
  <slide-x-left-transition>
    <div
      v-if="showSidebar"
      v-click-outside="clickOutside"
      class="menu image-on-background"
      :class="darkMode ? 'dark' : 'light'"
    >
      <div class="menu__inner">
        <div class="menu__list">
          <clickable-list-item
            v-for="item in sideList"
            :key="item.icon"
            :emit-action="item.emit"
            :icon="item.icon"
            :is-switch="item.switch"
            :title="item.title"
            @click="emittersFromMenu(item.emit)"
          >
            <template #switch>
              <switch-component
                :model-value="darkMode"
                @update:mode-value="emittersFromMenu(item.emit)"
              />
            </template>
          </clickable-list-item>
        </div>
      </div>
    </div>
  </slide-x-left-transition>
</template>

<script setup lang="ts">
import { BodyLock } from '@/utils/triggers/BodyTriggers'
import ClickableListItem from '@/components/common/ClickableListItem.vue'
import { Events } from '@/utils/types/emitter'
import SwitchComponent from '@/components/common/SwitchComponent.vue'
import { emitterKey } from '@/global'
import { inject, onMounted, ref } from 'vue'

defineProps({
  darkMode: {
    default: true,
    type: Boolean
  }
})

const sideList: { emit: Events; icon: string; switch: boolean; title: string }[] = [
  { emit: 'contactsAction', icon:'person', switch: false, title: 'Contacts' },
  { emit: 'settingsAction', icon:'settings', switch: false, title: 'Settings' },
  { emit: 'darkModeAction', icon:'dark_mode', switch: true, title: 'Night mode' }
]

const $emitter = inject(emitterKey)

const showSidebar = ref(false)

const clickOutside = (): void => {
  $emitter?.emit('sidebarAction', { sidebar: false })
}

const emittersFromMenu = (actionName: Events): void => {
  $emitter?.emit(actionName, true)

  if (actionName !== 'darkModeAction') {
    $emitter?.emit('sidebarAction', { body: true, sidebar: false })
  }
}

onMounted(() => {
  $emitter?.on('sidebarAction', ({ sidebar, body }) => {
    showSidebar.value = sidebar

    if (body === undefined) {
      BodyLock.trigger(sidebar)
    }
  })
})
</script>

<style scoped lang="scss">
  .menu {
    position: absolute;
    z-index: 999;
    left: 20px;
    top: 20px;
    max-width: 350px;
    width: 100%;
    height: calc(100% - 40px);
    background-position: center center;
    border-radius: 25px 0 0 25px;
    overflow: hidden;

    &__inner {
      height: calc(100% - 80px);
      padding: 40px 0;
      background-color: var(--messages-background);
    }
  }
</style>
