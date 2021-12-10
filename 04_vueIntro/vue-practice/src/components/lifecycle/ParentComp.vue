<template>
  <h2>Parent Comp</h2>
  <input v-model="nickname" ref="inputRef" />
  <button @click="consoleRef">console ref</button>
  <hr />
  <ChildComp v-if="showChild" ref="childComp" />
  <button @click="showChild = false">unmount child</button>
</template>
<script>
import ChildComp from "./ChildComp";
export default {
  name: "parentComp",
  data() {
    return {
      showChild: true,
    };
  },
  methods: {
    consoleRef() {
      this.$refs.inputRef.focus();
      this.$refs.inputRef.style.background = "red";
      console.log(this.$refs.inputRef, "input ref");
      console.log(this.$refs.childComp, "child ref");
      this.$refs.childComp.sayHello();
    },
  },
  components: {
    ChildComp,
  },
  beforeCreate() {
    console.log("parnet before create");
  },
  created() {
    console.log("parent created");
  },
  beforeMount() {
    console.log("parnet bm");
  },
  mounted() {
    console.log("parnet m");
  },
  beforeUpdate() {
    //console.log("parnet bu");
  },
  updated() {
    //console.log("parnet updated");
  },
  beforeUnmount() {
    console.log("parnet bum");
  },
  unmounted() {
    console.log("parnet um");
  },
};
</script>

<style></style>
