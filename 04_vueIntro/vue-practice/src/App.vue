<template>
  <div>
    <h2>Hello Mixins</h2>
    <ProductStatus />
    <FeeStatus />
    <SavingStatus />
  </div>
</template>

<script>
import ProductStatus from "./components/mixin/ProductStatus";
import FeeStatus from "./components/mixin/FeeStatus";
import SavingStatus from "./components/mixin/SavingStatus";
export default {
  name: "App",
  components: { ProductStatus, FeeStatus, SavingStatus },

  data() {
    return {};
  },
  directives: {},
  methods: {},
  computed: {},
  watch: {},
};
</script>
