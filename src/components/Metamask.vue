<script setup lang="ts">
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import { ref } from "vue";
import { useStore } from "../store";

const store = useStore();
const provider: any = await detectEthereumProvider();
var chainId = ref("");
if (provider) {
  console.log("Ethereum successfully detected!");
  provider.on("accountsChanged", (accounts: string[]) => {
    store.commit("setAccount", accounts[0]);
  });
  chainId = await provider.request({
    method: "eth_chainId",
  });
  const accounts = await provider.request({ method: "eth_requestAccounts" });
  const balance = await provider.request({ method: "eth_getBalance", params: [accounts[0], 'latest']});
  store.commit("setChainId", chainId);
  store.commit("setAccount", accounts[0]);
  store.commit("setBalance", ethers.utils.formatUnits(balance, "ether"));
} else {
  console.error("Please install MetaMask!");
}
</script>

<template>
  <div v-if="provider">Metamask successfully detected</div>
  <div v-if="!provider">Please install MetaMask!</div>
  Chain ID: {{ store.state.chainId }}
</template>

<style scoped>
</style>
