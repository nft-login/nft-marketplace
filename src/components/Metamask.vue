<script setup lang="ts">
import { ethers } from "ethers";
import { useStore } from "../store";

const store = useStore();
const provider: any = window.ethereum;
var chainId = "";
if (provider) {
  console.log("Ethereum successfully detected!");
  chainId = await store.state.blockchain.chainId();
} else {
  console.error("Please install MetaMask!");
}
</script>

<template>
  <div v-if="provider">Metamask successfully detected</div>
  <div v-if="!provider">Please install MetaMask!</div>
  Chain ID: {{ chainId }}
</template>

<style scoped>
</style>
