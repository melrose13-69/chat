<template>
  <div class="wrapper">
    <header-component />
    <router-view />
  </div>
</template>

<script>
import { DarkMode } from '@/utils/triggers/DarkMode'
import HeaderComponent from '@/components/Header/HeaderComponent'
// import RegistrationPage from '@/pages/Registration/RegistrationPage'
import { emitterKey } from '@/global'

// const RegistrationPage = () => import('@/pages/Registration/RegistrationPage')

export default {
  name: 'App',
  components: {
    HeaderComponent
  },
  inject: {
    $emitter: { from: emitterKey }
  },
  data () {
    return {
      dark: new DarkMode(this.$emitter)
    }
  },
  computed: {
    layout () {
      return this.$route.meta.layout || 'Login'
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
