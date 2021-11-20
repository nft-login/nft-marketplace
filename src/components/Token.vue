<script setup lang="ts">
import TokenImage from "./TokenImage.vue";
import Trade from "./Trade.vue";
import { useStore } from "../store";
const props = defineProps<{ id: number }>();

const store = useStore();
const token = await store.state.blockchain.getToken(Number(props.id));
const account = await store.state.blockchain.account();
</script>

<template>
  <div :key="id" className="mt-4">
    <TokenImage :uri="token.uri" />
    <p><span className="font-weight-bold">Token Id</span> : {{ id }}</p>

    <p>
      <span className="font-weight-bold">Owned By</span> :
      {{
        token.owner.substr(0, 5) +
        "..." +
        token.owner.slice(token.owner.length - 5)
      }}
    </p>
    <p><span className="font-weight-bold">Price</span> : {{ token.price }} Ξ</p>
    <Trade :token="token" :account="account" />
  </div>
</template>

<style scoped>
</style>
