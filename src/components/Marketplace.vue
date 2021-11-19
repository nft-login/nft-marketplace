<script setup lang="ts">
import Loading from "./Loading.vue";
import Tokens from "./Tokens.vue";
</script>

<template>
  <h1>Marketplace</h1>
  <Suspense>
    <template #default>
      <Tokens />
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
