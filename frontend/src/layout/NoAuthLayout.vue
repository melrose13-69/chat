<template>
  <div class="auth background-content">
    <div class="auth__content image-on-background">
      <div class="auth__content-inner background-content">
        <div
          class="auth__title"
          v-text="title"
        />
        <div class="auth__inner">
          <login-component v-if="layout === 'login'" />
          <registration-component v-else-if="layout === 'registration'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginComponent from '@/components/Login/LoginComponent.vue'
import RegistrationComponent from '@/components/Registration/RegistrationComponent.vue'
import { capitalizeString } from '@/utils/helpers/helpers'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const layout = computed(() => route.name)

const title = computed(() => layout.value ? capitalizeString(layout.value.toString()) : '')

</script>

<style scoped lang="scss">
  .auth {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    &__content {
      max-width: 450px;
      width: 100%;
      border-radius: 25px;
      overflow: hidden;

      &-inner {
        padding: 20px;
      }
    }
    &__title {
      font-size: 20px;
      font-weight: 600;
      border-bottom: 1px solid var(--in-mesage-background);
      padding-bottom: 10px;
      text-align: center;
      margin-bottom: 20px;
    }
    &__inner {}
  }
</style>
