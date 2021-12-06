<template>
  <div>
    <h1>Directives</h1>
    <h2 v-once>유저의 이름은 {{ userName }}</h2>
    <button @click="changeName">chagne Name</button>
    <h2 v-pre>{{ userName }}</h2>
    <input v-focus type="text" />
    hightLight ==>> <input v-highlight type="text" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userName: "Azimut",
    };
  },
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
    highlight: {
      mounted(el) {
        console.log({ el });
        el.oninput = () => {
          el.style.background = "salmon";
          el.style.color = "white";
        };
      },
    },
  },
  methods: {
    changeName() {
      console.log("Name Chagne!!");
      this.userName = "Code!!";
    },
  },
};
</script>

<style></style>
