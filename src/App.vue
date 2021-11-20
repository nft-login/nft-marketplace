<script setup lang="ts">
import Footer from "./components/Footer.vue";
import Loading from "./components/Loading.vue";
import Metamask from "./components/Metamask.vue";
import { useStore } from "./store";
const store = useStore();
store.state.blockchain.init().then(async () => {
  await store.state.blockchain.loadContract(
    await store.state.blockchain.contractAddress()
  );
  store.commit("setBlockchainLoaded", true);
});
</script>

<template>
  <div class="row">
    <div class="col-12">
      <div class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="btn btn-info">Home</router-link>
        <router-link to="/marketplace" class="btn btn-info"
          >Marketplace</router-link
        >
        <router-link to="/mytokens" class="btn btn-info">My Tokens</router-link>
        <router-link to="/mint" class="btn btn-info">Mint</router-link>
        <router-link to="/about" class="btn btn-info">About</router-link>
      </div>
    </div>

    <div class="col-12 bg-light border p-3">
      <Loading v-if="!store.state.blockchainLoaded" />
      <div v-if="store.state.blockchainLoaded">
        <router-view></router-view>
      </div>
      <Suspense>
        <template #default>
          <Metamask />
        </template>
        <template #fallback>
          <div style="text-align: center; padding-top: 20px">
            <Loading />
            Loading please wait ...
          </div>
        </template>
      </Suspense>
    </div>
  </div>
  <div class="col-12 bg-info">
    <Footer />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: auto;
  margin-top: 50px;
  width: 50%;
  padding: 10px;
}
</style>
