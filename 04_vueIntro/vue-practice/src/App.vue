<template>
  <div>
    <GreetingUser :username="username" />
    <GreetingUser username="dooli" />
    <GreetingUser username="pororo" />
    <GreetingUser username="dragon" />
    <GreetingUser />
    <button @click="changeName">change</button>
  </div>
</template>

<script>
import GreetingUser from "./components/GreetingUser";
export default {
  name: "App",
  components: {
    GreetingUser,
  },
  data() {
    return {
      username: "Azimut",
    };
  },
  directives: {},
  methods: {
    changeName() {
      this.username = "Tesla";
    },
  },
  computed: {},
  watch: {},
};
</script>

<style></style>
