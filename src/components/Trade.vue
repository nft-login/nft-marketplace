<script setup lang="ts">
import { ref } from "vue";
import Loading from "./Loading.vue";
import { Token } from "../model/token";
import { useStore } from "../store";
const store = useStore();
const props = defineProps<{ token: Token; account: string }>();
const isOwner = props.token.owner.toLowerCase() === props.account.toLowerCase();
const isForSale = props.token.forSale;
const loading = ref(false);
const newPrice = ref(props.token.price);
const buy = () => {
  loading.value = true;
  store.state.blockchain
    .buyToken(props.token.id, props.token.price)
    .then(() => {
      loading.value = false;
      window.location.reload();
    })
    .catch(() => {
      loading.value = false;
    });
};

const toggleForSale = () => {
  loading.value = true;
  store.state.blockchain
    .toggleForSale(props.token.id)
    .then(() => {
      loading.value = false;
      window.location.reload();
    })
    .catch(() => {
      loading.value = false;
    });
};
const changePrice = (e: any) => {
  e.preventDefault();
  loading.value = true;
  store.state.blockchain
    .changeTokenPrice(props.token.id, newPrice.value)
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
  <Loading v-if="loading" />
  <button
    v-if="!isOwner && isForSale"
    type="button"
    :onclick="buy"
    class="btn btn-success"
  >
    Buy
  </button>
  <button
    v-if="isOwner && !isForSale"
    type="button"
    :onclick="toggleForSale"
    class="btn btn-danger"
    title="Place for sale!"
  >
    Sell
  </button>
  <button
    v-if="isOwner && isForSale"
    type="button"
    :onclick="toggleForSale"
    class="btn btn-primary"
    title="Remove from sale!"
  >
    Keep
  </button>
  <form
    v-if="isOwner && isForSale"
    @submit="changePrice"
    class="mx-3 mt-2 row form-inline"
  >
    <input
      id="newPrice"
      v-model="newPrice"
      type="text"
      name="newPrice"
      min="0"
      class="form-control"
    />
    <button class="btn btn-secondary" type="submit">Change Price</button>
  </form>
</template>

<style scoped>
#newPrice {
  width: 100px;
}
</style>
