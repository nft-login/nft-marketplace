<script setup lang="ts">
import RotateLoader from "vue-spinner/src/RotateLoader.vue";
const loading = true;
const color = "#4289b9";
</script>

<template>
  <rotate-loader :loading="loading" :color="color" />
</template>

<style scoped>
</style>
