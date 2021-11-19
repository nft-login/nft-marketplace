<script setup lang="ts">
import Metamask from "./Metamask.vue";
import Loading from "./Loading.vue";
import { useStore } from "../store";
const store = useStore();
</script>

<template>
  <h1>{{ store.state.account }}</h1>
  <p>Balance {{ store.state.balance }}</p>
  <Suspense>
    <template #default>
      <Metamask />
    </template>
    <template #fallback>
      <div style="text-align: center; padding-top: 20px">
        <Loading />
        Loading please wait ...
      </div>
    </template>
  </Suspense>
</template>

<style scoped>
</style>
