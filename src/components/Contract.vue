<script setup lang="ts">
import { useStore } from "../store";
const store = useStore();
var contractAddress = await store.state.blockchain.contractAddress();
var name = await store.state.blockchain.nftName();
var symbol = await store.state.blockchain.nftSymbol();
</script>

<template>
  <div v-if="store.state.blockchainLoaded">
    {{ name }} {{ symbol }}
    <p>Contract {{ contractAddress }}</p>
  </div>
</template>

<style scoped>
</style>
