<template>
  <h2>Parent Comp</h2>
  <ChildComp v-if="showChild" />
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
    console.log("parnet bu");
  },
  updated() {
    console.log("parnet updated");
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
