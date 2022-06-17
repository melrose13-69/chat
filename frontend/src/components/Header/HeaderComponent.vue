<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__inner-burger">
        <icon-button
          v-if="routeName === 'chat'"
          icon="menu"
          @click="openBurgerMenu"
        />
      </div>
      <div class="header__inner-controls">
        <icon-button
          v-if="routeName === 'chat'"
          icon="logout"
          @click="logout"
        />
        <span
          v-if="routeName !== 'chat'"
          class="header__inner-login"
        >
          <router-link :to="{ name: 'login' }">
            Login
          </router-link>
          <router-link :to="{ name: 'registration' }">
            Registration
          </router-link>
        </span>
      </div>
    </div>
  </header>
</template>

<script>
import IconButton from '@/components/common/IconButton'
import MainLogo from '@/components/common/MainLogo'
import { defineComponent } from 'vue'
import { emitterKey } from '@/global'

export default defineComponent({
  name: 'HeaderComponent',
  components: {
    IconButton,
    MainLogo
  },
  inject: {
    $emitter: { from: emitterKey }
  },
  computed: {
    routeName () {
      return this.$route.name
    }
  },
  methods: {
    logout () {
      this.$router.push('/login')
    },
    openBurgerMenu () {
      this.$emitter.emit('sidebarAction', { sidebar: true })
    }
  }
})
</script>

<style scoped lang="scss">
  .header {
    padding: 15px;
    background-color: var(--primary-backgound);
    backdrop-filter: var(--backdrop-blur-filter-20);
    border-radius: 25px 25px 0 0;

    &__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-controls {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      &-login {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 18px;
      }
    }
  }
</style>
