<script setup lang="ts">
import Loading from "./Loading.vue";
import Token from "./Token.vue";
import { useStore } from "../store";
const store = useStore();
const numTokens = await store.state.blockchain.tokenCount();
console.log(numTokens);
</script>

<template>
  <div className="d-flex flex-wrap mb-2">
    <div v-for="index in numTokens" :key="index" className="w-40 p-3 mt-1 border">
      <Token :id="index - 1" />
    </div>
  </div>
</template>

<style scoped>
</style>
