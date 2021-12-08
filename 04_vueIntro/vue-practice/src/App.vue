<template>
  <div>
    <h1>Watchers</h1>
    <h2>
      Watchers는 데이터에 변경이 일어나는 것을 감지 하는 역할! --> 그리고 어떤
      작동이 일어남!
    </h2>
    <h2>current Money :: {{ money }}</h2>
    <div>
      <button @click="money += 100">eran Money</button>
      <button @click="money -= 100">spand Money</button>
    </div>
    <h3>{{ receite }}</h3>
    <button @click="receite.food += 500">buy Food</button>
    <hr />
    <input type="text" v-model="userName" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userName: "Azimut",
      money: 0,
      receite: {
        food: 3000,
        fee: 200,
        fare: 10000,
      },
    };
  },
  directives: {},
  methods: {},
  computed: {},
  watch: {
    userName: {
      handler(newValue) {
        console.log("이름 변경 감지", newValue);
      },
      immediate: true,
    },
    // receite(newValue, oldValue) {
    //   console.log("영수증 값 변화 감지!", newValue, oldValue);
    // },
    receite: {
      handler(newValue) {
        console.log("영수증 값 변화 감지", newValue);
      },
      deep: true,
    },

    money(newValue, oldValue) {
      console.log(oldValue);
      if (newValue >= 2000 && newValue > oldValue) {
        console.log("2000원이 넘었어! 미션성공!");
      }
      if (oldValue < 1500 && newValue < oldValue) {
        console.log("돈을 아껴써라!!");
      }
    },
  },
};
</script>

<style></style>
