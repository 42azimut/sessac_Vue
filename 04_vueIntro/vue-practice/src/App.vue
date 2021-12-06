<template>
  <div>
    <h1>Hello Vue JS! 33. 이벤트 핸들링</h1>
    <h1>{{ name }}</h1>

    <button v-on:click.right="changeName">Change Name</button>
    <button
      v-on:mouseover="name = 'code mouseover Azimut'"
      v-on:mouseleave="name = 'azimut moveLeave'"
    >
      Change Name
    </button>

    <a v-on:click.prevent="movePage" href="https://naver.com">네이버로 이동</a>
    <h2>{{ number }}</h2>
    <button v-on:click="increament($e, 1)">숫자 증가</button>
    <button v-on:click="decreament(1)">숫자 감소</button>
    <button v-on:click="increament(6)">숫자 증가</button>
    <button v-on:click="decreament(6)">숫자 감소</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "Azimut",
      number: 0,
    };
  },
  methods: {
    changeName() {
      this.name = "Code Azimut changed";
    },
    movePage() {
      const check = confirm("패이지를 이동하겠나요?");
      if (check) {
        console.log("페이지 이동");
      } else {
        console.log("페이지 이동 안함!");
      }
    },
    increament(e, num) {
      console.log(e);
      this.number += num;
    },
    decreament(num) {
      this.number -= num;
    },
  },
};
</script>

<style>
a {
  font-size: 25px;
  display: block;
}
</style>
