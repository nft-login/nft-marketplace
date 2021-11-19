<script setup lang="ts">
import Loading from  './components/Loading.vue'
</script>

<template>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Loading />
  <router-view></router-view>
</template>

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
