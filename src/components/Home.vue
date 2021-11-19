<script setup lang="ts">
import Loading from "./Loading.vue";
import Contract from "./Contract.vue";
import Account from "./Account.vue";
</script>

<template>
  <h1>Home</h1>
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
  <Account />
</template>

<style scoped>
</style>
