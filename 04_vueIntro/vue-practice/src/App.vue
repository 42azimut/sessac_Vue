<template>
  <div>
    <h2>Hello Component</h2>
    <button @click="displayDetail = true">show detail</button>
    <DetailView
      v-if="displayDetail"
      @closeDetail="close"
      @sendData="showData"
    />
  </div>
</template>

<script>
import DetailView from "./components/DetailView";
export default {
  name: "App",
  components: {
    DetailView,
  },
  data() {
    return {
      displayDetail: false,
    };
  },
  directives: {},
  methods: {
    close() {
      this.displayDetail = false;
    },
    showData(data) {
      console.log(data, " <<= data sent");
    },
  },
  computed: {},
  watch: {},
};
</script>

<style></style>
