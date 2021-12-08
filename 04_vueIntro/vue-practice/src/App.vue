<template>
  <div>
    <h2>Hello Component</h2>
    <button @click="activeTab = 'Menu1'">Menu1</button>
    <button @click="activeTab = 'Menu2'">Memu2</button>
    <button @click="activeTab = 'Menu3'">Menu3</button>
    <keep-alive>
      <component :is="activeTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import Menu1 from "./components/tabitems/Menu1";
import Menu2 from "./components/tabitems/Menu2";
import Menu3 from "./components/tabitems/Menu3";
export default {
  name: "App",
  components: { Menu1, Menu2, Menu3 },
  data() {
    return {
      username: "Azimut",
      activeTab: "Menu1",
    };
  },
  provide() {
    return {
      name: this.username,
    };
  },
  directives: {},
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style></style>
