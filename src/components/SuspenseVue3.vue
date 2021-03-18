<template>
  <div v-if="!isLoading">
    <p v-if="!isError">{{ dadJoke }}</p>
    <p v-else>There was an error...</p>
  </div>
  <div v-else>Loading...</div>
  <div>Suspense</div>
  <div v-if="suspenseError">{{ suspenseError }}</div>
  <suspense v-else>
    <template #default> <product /></template>
    <template #fallback>Loading... </template>
  </suspense>
</template>

<script>
import axios from "axios";
import { ref, onErrorCaptured } from "vue";
import Product from "./Product.vue";
export default {
  components: {
    Product,
  },
  setup() {
    const dadJoke = ref(null);
    const isLoading = ref(null);
    const isError = ref(null);
    const suspenseError = ref(null);
    onErrorCaptured((e) => {
      suspenseError.value = e.message;
    });
    axios
      .get("https://reqres.in/api/products/5")
      .then((res) => {
        isLoading.value = false;
        dadJoke.value = "Joke From " + res.data.data.name;
      })
      .catch((error) => {
        isLoading.value = false;
        isError.value = true;
      });

    return {
      isLoading,
      dadJoke,
      isError,
      suspenseError,
    };
  },
};
</script>