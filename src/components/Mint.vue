<script setup lang="ts">
import { ref } from "vue";
import Loading from "./Loading.vue";
import { useStore } from "../store";
const store = useStore();

const num = ref(1);
const loading = ref(false);

const mint = async (e: any) => {
  e.preventDefault();
  loading.value = true;
  store.state.blockchain
    .mint(num.value)
    .then(() => {
      loading.value = false;
      window.location.reload();
    })
    .catch(() => {
      loading.value = false;
    });
};
</script>

<template>
  <div class="card card-body">
    <Loading v-if="loading" />
    <form @submit="mint">
      <div class="form-row mb-3 col-md-6">
        <label for="num" class="form-label">Count</label>
        <input type="number" class="form-control" v-model="num" id="num" />
      </div>
      <button v-if="!loading" type="submit" class="btn btn-primary mb-3">
        Mint more Tokens
      </button>
    </form>
  </div>
</template>

<style scoped>
</style>
