<script setup lang="ts">
import { useStore } from "../store";
const store = useStore();
const account = await store.state.blockchain.account();
const balance = await store.state.blockchain.balance();
const tokenBalance = await store.state.blockchain.balanceOf(account);
</script>

<template>
  <h1>{{ account }}</h1>
  <p>Balance {{ balance }}</p>
  <p>Tokens {{ tokenBalance }}</p>
</template>

<style scoped>
</style>
