<script setup lang="ts">
import Markdown from "vue3-markdown-it";
import { useStore } from "../store";
const store = useStore();
const baseURI = await store.state.blockchain.baseURI();
const source = await (await fetch(baseURI)).text();
</script>

<template>
  <div>
    <Markdown :source="source" />
  </div>
</template>

<style scoped>
</style>
