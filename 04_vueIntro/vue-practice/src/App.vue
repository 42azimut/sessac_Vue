<template>
  <div>
    <h2>Hello 48.Composition API</h2>
  </div>
  <TestComponent />
</template>

<script>
import TestComponent from "./components/composition/TestComponent";
export default {
  name: "App",
  components: { TestComponent },

  data() {
    return {};
  },
  directives: {},
  methods: {},
  computed: {},
  watch: {},
};
</script>
