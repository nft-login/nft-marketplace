<script setup lang="ts">
import Loading from "./Loading.vue";
import Token from "./Token.vue";
import { useStore } from "../store";
const store = useStore();
const numTokens = await store.state.blockchain.tokenCount();
console.log(numTokens);
</script>

<template>
  <ul>
    <li v-for="index in numTokens-1" :key="index">
      <Token :id="index" />
    </li>
  </ul>
</template>

<style scoped>
</style>
