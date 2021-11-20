<script setup lang="ts">
import { ref } from "vue";
import Loading from "./Loading.vue";
import { useStore } from "../store";

const ipfs = window.IpfsHttpClient.create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});
const store = useStore();

const name = ref("My Super NFT");
const description = ref("# My Super NFT");
const loading = ref(false);

const deploy = async (e: any) => {
  e.preventDefault();
  loading.value = true;
  const cid = await ipfs.add(description.value);
  let tokenURI = `https://ipfs.infura.io/ipfs/${cid.path}/?token=`;
  console.log(tokenURI);
  store.state.blockchain
    .deployNew(name.value, "EAG", tokenURI, "0.001")
    .then((address: string) => {
      loading.value = false;
      var searchParams = new URLSearchParams(window.location.search);
      searchParams.set("contract", address);
      window.location.search = searchParams.toString();
      var newRelativePathQuery =
        window.location.pathname + "?" + searchParams.toString();
      window.history.pushState(null, "", newRelativePathQuery);
      window.location.reload();
    });
};
</script>

<template>
  <div class="card card-body">
    <Loading v-if="loading" />
    <form @submit="deploy">
      <div class="form-row mb-3 col-md-6">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" v-model="name" id="name" />
      </div>
      <div class="form-row mb-3">
        <label for="description" class="form-label"
          >Description (in Markdown)</label
        >
        <textarea
          class="form-control"
          v-model="description"
          id="description"
          rows="10"
        ></textarea>
      </div>
      <button v-if="!loading" type="submit" class="btn btn-primary mb-3">
        Deploy new Contract
      </button>
    </form>
  </div>
</template>

<style scoped>
</style>
