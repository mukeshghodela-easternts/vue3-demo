<template>
  <div v-for="item in list" :ref="setItemRef" :key="item">
    {{ item }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ["1", "2", "3"],
      itemRefs: [],
    };
  },
  methods: {
    setItemRef(el) {
      if (el) {
        this.itemRefs.push(el);
      }
    },
  },
  beforeUpdate() {
    this.itemRefs = [];
  },
  updated() {
    console.log(this.itemRefs);
  },
};
</script>
