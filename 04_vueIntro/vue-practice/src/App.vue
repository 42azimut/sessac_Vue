<template>
  <div>
    <GreetingUser id="greeting" />
  </div>
</template>

<script>
import GreetingUser from "./components/GreetingUser";
export default {
  name: "App",
  components: {
    //ProductList,
    GreetingUser,
  },
  data() {
    return {
      // products: [
      //   { id: 0, name: "TV", price: 500000, company: "LG" },
      //   { id: 1, name: "전자렌지", price: 200000, company: "삼성" },
      //   { id: 2, name: "맥북프로", price: 1500000, company: "애플" },
      //   { id: 3, name: "책상", price: 150000, company: "이케아" },
      //   { id: 4, name: "모니터", price: 340000, company: "삼성" },
      // ],
    };
  },
  directives: {},
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style></style>
