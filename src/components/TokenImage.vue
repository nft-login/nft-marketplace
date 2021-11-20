<script setup lang="ts">
import { toSvg } from "jdenticon";
const props = defineProps<{ uri: string }>();
const data = toSvg(props.uri, 144);
</script>

<template>
  <div v-html="data" />
</template>

<style scoped>
</style>
