<script setup lang="ts">
import Token from "./Token.vue";
import { useStore } from "../store";
const store = useStore();
const account = await store.state.blockchain.account();
const numTokens = await store.state.blockchain.tokenCount();
let indices = Array.from(Array(numTokens).keys());
let tokens_ = indices.map((id) => store.state.blockchain.getToken(Number(id)));
let tokens = await Promise.all(tokens_);
console.log(account, tokens);
tokens = tokens.filter((token) => token.owner.toLowerCase() === account.toLowerCase());
</script>

<template>
  <div className="d-flex flex-wrap mb-2">
    <div
      v-for="token in tokens"
      :key="token.id"
      className="w-40 p-3 mt-1 border"
    >
      <Token :id="token.id" />
    </div>
  </div>
</template>

<style scoped>
</style>
