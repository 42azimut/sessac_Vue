<template>
  <h2>Hello LifeCycle</h2>
  <hr />
  <ChildComponent firstname="Code" lastname="Azimut" @sendParent="sendParent" />
</template>

<script>
import ChildComponent from "./ChildComponent.vue";
import {} from "vue";

export default {
  name: "TestComponent",
  components: { ChildComponent },
  methods: {
    sendParent() {
      console.log("parent event");
    },
  },
};
</script>

<style></style>
