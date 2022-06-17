<template>
  <div class="login">
    <input-component
      icon="person"
      placeholder="Login"
    />
    <input-component
      icon="key"
      type="password"
      placeholder="Password"
    />
    <div class="login__button">
      <button-component text="Login" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from '@/components/common/ButtonComponent.vue'
import InputComponent from '@/components/common/InputComponent.vue'
</script>

<style scoped lang="scss">
  .login {
    &__button {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
  }
</style>
