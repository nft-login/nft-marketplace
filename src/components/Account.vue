<script setup lang="ts">
import Loading from "./Loading.vue";
import { useStore } from "../store";
const store = useStore();
</script>

<template>
  <h1>{{ store.state.account }}</h1>
  <p>Balance {{ store.state.balance }}</p>
  
</template>

<style scoped>
</style>
