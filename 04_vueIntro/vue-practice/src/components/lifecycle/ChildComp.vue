<template>
  <h2>Child Comp</h2>
  <input type="text" v-model="username" />
</template>

<script>
export default {
  name: "childComp",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    sayHello() {
      console.log("Say Heelooo!!!");
    },
  },
  beforeCreate() {
    console.log("Child before create");
  },
  created() {
    console.log("Child created");
  },
  beforeMount() {
    console.log("Child bm");
  },
  mounted() {
    console.log("Child m");
  },
  beforeUpdate() {
    console.log("Child bu");
  },
  updated() {
    console.log("Child updated");
  },
  beforeUnmount() {
    console.log("Child bum");
  },
  unmounted() {
    console.log("Child um");
  },
};
</script>

<style></style>
