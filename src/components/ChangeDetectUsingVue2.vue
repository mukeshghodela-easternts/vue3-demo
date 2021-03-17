<template>
  <button @click="addFieldToObject">Add Field To Object</button>
  <button @click="deleteFieldFromObject">Delete Field FromO bject</button>
  <button @click="useSetToAddField">Use Set To Add Field</button>
  <button @click="changeArrayUsingIndex">Change Array Using Index</button>

  <p>Person Object{{ personObject }}</p>
  <p>People Array {{ peopleArray }}</p>
</template>

<script>
export default {
  name: "ChangeDetectUsingVue2",
  data() {
    return {
      personObject: {
        name: "Mukesh",
      },
      peopleArray: ["Mukesh", "Raj", "Amit"],
    };
  },
  methods: {
    addFieldToObject() {
      this.personObject.age = 50;
    },
    deleteFieldFromObject() {
      delete this.personObject.age;
    },
    useSetToAddField() {
      this.$set(this.personObject, "height", "6ft");
    },
    changeArrayUsingIndex() {
      this.peopleArray[0] = "Vritika";
    },
  },
};
</script>
