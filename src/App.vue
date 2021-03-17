<template>
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <change-detect-using-vue-2></change-detect-using-vue-2>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ChangeDetectUsingVue2 from "./components/ChangeDetectUsingVue2.vue";

export default {
  components: {
    HelloWorld,
    ChangeDetectUsingVue2,
  },
};
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>