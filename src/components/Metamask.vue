<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "../store";

const store = useStore();
const chainId = ref("");
const provider: any = window.ethereum;

if (provider) {
  console.log("Ethereum successfully detected!");
  provider.on("accountsChanged", (accounts: string[]) => {
    window.location.reload();
    store.commit("setAccount", accounts[0]);
  });
  provider.on("chainChanged", (chainId: string) => {
    console.log("changed to chain", chainId);
    window.location.reload();
  });
  const c_id = await provider.request({
    method: "eth_chainId",
  });
  chainId.value = Number(c_id).toString(10);
} else {
  console.error("Please install MetaMask!");
}
</script>

<template>
  <div v-if="provider">
    Metamask successfully detected<br />

    Chain ID: {{ chainId }}
  </div>
  <div v-if="!provider">
    You are not connected to a wallet. Please install MetaMask!<br />
    <a href="https://metamask.io/"
      ><img src="https://metamask.io/images/mm-logo.svg"
    /></a>
  </div>
</template>

<style scoped>
</style>
