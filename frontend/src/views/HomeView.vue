<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <hello-world msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {

  }
})
</script>
