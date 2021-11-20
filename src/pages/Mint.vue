<script setup lang="ts">
import Loading from "../components//Loading.vue";
import Deploy from "../components/Deploy.vue";
import Mint from "../components/Mint.vue";
</script>

<template>
  <h1>Mint</h1>
  <div class="row justify-content-center">
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
    <Suspense>
      <template #default>
        <Mint />
      </template>
      <template #fallback>
        <div style="text-align: center; padding-top: 20px">
          <Loading />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
</style>
