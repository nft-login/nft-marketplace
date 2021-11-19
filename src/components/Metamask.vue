<script setup lang="ts">
import detectEthereumProvider from "@metamask/detect-provider";
import { ref } from "vue";

defineProps<{ setAccount: any }>();

const provider = await detectEthereumProvider();
var chainId = ref("");
if (provider) {
  console.log("Ethereum successfully detected!");
  chainId = await provider.request({
    method: "eth_chainId",
  });
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
