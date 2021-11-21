<script setup lang="ts">
const WEB3_STORAGE_API_TOKEN = import.meta.env.VITE_WEB3_STORAGE_API_TOKEN;

import { ref } from "vue";
import Loading from "./Loading.vue";
import { useStore } from "../store";
import { Web3Storage } from "web3.storage";

const uploadDescription = async (
  name: string,
  description: string
): Promise<string> => {
  if (WEB3_STORAGE_API_TOKEN && typeof WEB3_STORAGE_API_TOKEN === "string") {
    const web3Storage = new Web3Storage({ token: WEB3_STORAGE_API_TOKEN });
    const file = new File([description], `${name}.md`, { type: "text/plain" });
    const rootCid = await web3Storage.put([file]);
    const res: any = await web3Storage.get(rootCid);
    const files = await res.files();
    console.log(WEB3_STORAGE_API_TOKEN, files[0].cid);
    return `https://ipfs.infura.io/ipfs/${files[0].cid}/?token=`;
  } else {
    const ipfs = window.IpfsHttpClient.create({
      host: "ipfs.infura.io",
      port: 5001,
      protocol: "https",
    });

    const cid = await ipfs.add(description);
    return `https://ipfs.infura.io/ipfs/${cid.path}/?token=`;
  }
};

const store = useStore();

const name = ref("My Super NFT");
const description = ref("# My Super NFT");
const loading = ref(false);

const deploy = async (e: any) => {
  e.preventDefault();
  loading.value = true;
  let tokenURI = await uploadDescription(name.value, description.value);
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
