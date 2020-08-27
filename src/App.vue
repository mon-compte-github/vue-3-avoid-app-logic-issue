<template>
  <div id="app" class="container">
    <Home></Home>
  </div>
</template>

<script lang="ts">

import { defineComponent, onMounted } from "vue";
import Home from './pages/Home.vue';

export default defineComponent({
  components: {
    Home
  },
  setup() {
    return {}
  }
});

</script>

<style lang="scss">

@import "./custom.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";

// Prevent iOS bounce without disabling scroll ability
// https://stackoverflow.com/a/29895108

html {
    height  : 100%;
    overflow: hidden;
    position: relative;
}
body {
    height  : 100%;
    overflow: auto;
    position: relative;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  margin-right: auto;
  margin-left: auto;
}

</style>
