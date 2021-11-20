<script setup lang="ts">
import Loading from "../components//Loading.vue";
import Deploy from "../components/Deploy.vue";
</script>

<template>
  <h1>Mint</h1>
  <Suspense>
    <template #default>
      <Deploy />
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
