<script setup lang="ts">
import Loading from "../components//Loading.vue";
import MyTokens from "../components/MyTokens.vue";
</script>

<template>
  <h1>MyTokens</h1>
  <Suspense>
    <template #default>
      <MyTokens />
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
