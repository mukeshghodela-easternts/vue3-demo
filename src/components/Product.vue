<template>
  <div style="margin-top: 20px"><b>Product</b>: {{ product }}</div>
</template>
<script>
import axios from "axios";
export default {
  async setup() {
    const product = await fetchProduct();
    async function fetchProduct() {
      const response = await axios.get("https://reqres.in/api/products/5");

      return response.data.data.name;
    }

    return {
      product,
    };
  },
};
</script>