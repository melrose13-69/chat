<template>
  <div class="content">
    <chat-list />
    <chat-messages />
  </div>

  <!-- absolute -->
  <burger-menu :dark-mode="dark.mode" />
  <settings-modal />
</template>

<script>
import BurgerMenu from '@/components/BurgerMenu/BurgerMenu'
import ChatList from '@/components/Chat/ChatList/ChatList'
import ChatMessages from '@/components/Chat/ChatMessage/ChatMessages'
import { DarkMode } from '@/utils/triggers/DarkMode'

import SettingsModal from '@/components/Modal/SettingsModal'
// import SettingsSide from '@/components/BurgerMenu/SettingsSide'
import { emitterKey } from '@/global'

export default {
  name: 'ChatPage',
  components: {
    BurgerMenu,
    ChatList,
    ChatMessages,
    SettingsModal
  },
  inject: {
    $emitter: { from: emitterKey }
  },
  data () {
    return {
      dark: new DarkMode(this.$emitter)
    }
  }
}
</script>

<style lang="scss">
  .wrapper {
    position: relative;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-gap: 5px;
    background-color: var(--wrapper-background);
    height: calc(100vh - 40px);
    width: calc(100vw - 40px);
    padding: 20px;
    backdrop-filter: var(--backdrop-blur-filter-70);
    overflow: hidden;
  }

  .content {
    display: grid;
    max-height: calc(100vh - 100px);
    grid-template-columns: 400px 1fr;
    grid-gap: 5px;
    border-radius: 0 0 25px 25px;
    overflow: hidden;
  }
</style>
