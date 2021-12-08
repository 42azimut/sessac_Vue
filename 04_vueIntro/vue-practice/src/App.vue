<template>
  <div>
    <GreetingUser
      :username="username"
      :numberOfVisit="numberOfVisit"
      :siteInfo="siteInfo"
    />
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
      numberOfVisit: undefined,
      siteInfo: undefined,
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
