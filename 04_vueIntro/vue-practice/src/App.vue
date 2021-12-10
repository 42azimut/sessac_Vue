<template>
  <div>
    <h2>Hello Life Cycle</h2>
    <ParentComp />
  </div>
</template>

<script>
import ParentComp from "./components/lifecycle/ParentComp.vue";
export default {
  name: "App",
  components: {
    ParentComp,
  },

  data() {
    return {};
  },
  directives: {},
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style></style>
