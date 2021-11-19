<script setup lang="ts">
import Loading from "./Loading.vue";
import { useStore } from "../store";
const store = useStore();
const account = await store.state.blockchain.account();
const balance = await store.state.blockchain.balance();
</script>

<template>
  <h1>{{ account }}</h1>
  <p>Balance {{ balance }}</p>
</template>

<style scoped>
</style>
