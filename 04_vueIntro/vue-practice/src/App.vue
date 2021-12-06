<template>
  <div>
    <h1>Hello Vue JS! 32. 메서드</h1>
    <h2>5년뒤 :: {{ add(5) }}</h2>
    <h2>동갑의 10명이 있다면 나이 총 합은? {{ multiply(age, 10) }}</h2>
    <h2>{{ getTotalScore(100) }}</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      age: 30,
    };
  },
  methods: {
    add(num) {
      return this.age + num;
    },
    multiply(num1, num2) {
      return num1 * num2;
    },
    getTotalScore(num) {
      return this.multiply(num, num);
    },
  },
};
</script>

<style></style>
