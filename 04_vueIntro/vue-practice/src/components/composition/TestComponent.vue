<template>
  <h2>isHandsome ?? {{ isHandsome }}</h2>
  <h3>{{ job }}</h3>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  name: "TestComponent",
  setup() {
    let isHandsome = ref(false);
    const state = reactive({
      name: "Azimut-reactive",
      age: 33,
      job: "developer",
    });
    //let isNotUgly = isHandsome;
    //isHandsome.value = true;
    //console.log(isNotUgly);
    return {
      //isNotUgly,
      isHandsome,
      ...toRefs(state),
    };
  },
  // data() {
  //   return {
  //     username: "azimut",
  //   };
  // },
};
</script>

<style></style>
