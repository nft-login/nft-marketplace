<script setup lang="ts">
import Loading from "../components/Loading.vue";
import Contract from "../components/Contract.vue";
import Info from "../components/Info.vue";
</script>

<template>
  <h1>NFT Marketplace</h1>
  <Suspense>
    <template #default>
      <Contract />
    </template>
    <template #fallback>
      <div style="text-align: center; padding-top: 20px">
        <Loading />
      </div>
    </template>
  </Suspense>
  <Suspense>
    <template #default>
      <Info />
    </template>
    <template #fallback>
      <div style="text-align: center; padding-top: 20px">
        <Loading />
      </div>
    </template>
  </Suspense>
</template>

<style scoped>
</style>
