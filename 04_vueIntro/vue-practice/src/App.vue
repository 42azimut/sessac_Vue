<template>
  <div>
    <h2>Hello HTTP Request</h2>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/http/TodoList.vue";
export default {
  name: "App",
  components: { TodoList },
  data() {
    return {};
  },
  directives: {},
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style scoped></style>
