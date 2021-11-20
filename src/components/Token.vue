<script setup lang="ts">
import TokenImage from "./TokenImage.vue"
import { useStore } from "../store";
const props = defineProps<{ id: number }>()

const store = useStore();
const token = await store.state.blockchain.getToken(Number(props.id));
</script>

<template>
    <TokenImage :uri="token.uri" />
    {{token.price}}
</template>

<style scoped>
</style>
