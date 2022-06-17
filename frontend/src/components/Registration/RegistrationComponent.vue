<template>
  <div class="registration">
    <input-component
      icon="person"
      placeholder="First name"
    />
    <input-component
      icon="person"
      placeholder="Last name"
    />
    <input-component
      icon="person"
      placeholder="Login"
    />
    <input-component
      icon="mail"
      placeholder="Email"
    />
    <input-component
      icon="key"
      type="password"
      placeholder="Password"
    />
    <input-component
      icon="key"
      type="password"
      placeholder="Repeat password"
    />
    <div class="registration__button">
      <button-component text="Registration" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from '@/components/common/ButtonComponent.vue'
import InputComponent from '@/components/common/InputComponent.vue'

</script>

<style scoped lang="scss">
  .registration {
    &__button {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
  }
</style>
