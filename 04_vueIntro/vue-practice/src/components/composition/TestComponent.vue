<template>
  <h2>Hello Reusability</h2>
  <hr />
  <FeeStatus />
  <hr />
  <ProductStatus />
  <hr />
  <SavingStatus />
</template>

<script>
import FeeStatus from "../mixin/FeeStatus";
import ProductStatus from "../mixin/ProductStatus";
import SavingStatus from "../mixin/SavingStatus";

export default {
  name: "TestComponent",
  components: { FeeStatus, ProductStatus, SavingStatus },
  methods: {
    sendParent() {
      console.log("parent event");
    },
  },
};
</script>

<style></style>
