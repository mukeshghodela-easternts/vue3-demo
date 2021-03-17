<template>
  <form>
    <div>
      <input
        type="text"
        :value="name"
        @input="(event) => $emit('update:name', event.target.value)"
      />
    </div>
    <div>
      <input
        type="email"
        :value="email"
        @input="(event) => $emit('update:email', event.target.value)"
      />
    </div>
  </form>
</template>
<script>
export default {
  props: ["name", "email"],
};
</script>
