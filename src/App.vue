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
  <router-link to="/">Go to Home</router-link>
  <router-link to="/about">Go to About</router-link>
  <Loading v-if="!store.state.blockchainLoaded" />
  <div v-if="store.state.blockchainLoaded">
    <img alt="Vue logo" src="./assets/logo.png" />
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
  <Footer />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
