<script setup lang="ts">
defineProps<{ account: string }>();
import Metamask from "./Metamask.vue";
import Loading from "./Loading.vue";
const setAccount = () => {};
</script>

<template>
  <h1>{{ account }}</h1>
  <Suspense>
    <template #default>
      <Metamask :set-account="setAccount" />
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
