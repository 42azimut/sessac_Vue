<template>
  <div>
    <h1>Hellow VueJS</h1>
    <h2 class="line-through">line-through</h2>
    <h2 v-bind:class="textDecoration" class="text-red">line-through</h2>
    <h2 :class="isDone === true ? 'line-through' : 'highlight'">
      line-through
    </h2>
    <h2
      :class="{
        highlight: isDone === false,
        'text-red': username === 'jayden',
      }"
    >
      Object Class 형태의 동적 클래스
    </h2>

    <h2
      :class="[
        idDone === true ? 'line-through' : 'highlight',
        username === 'jayden' ? 'text-red' : 'text-green',
        'highlight',
      ]"
    >
      Array 형태의 동적 클래스 부여
    </h2>

    <!--
      ㅈ조건 ? 참일경우 : 아닐경우
     -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      username: "jaydenaa",
      isDone: true, // or false
      textDecoration: "line-through",
    };
  },
};
</script>

<style>
.text-red {
  color: red;
}
.text-green {
  color: green;
}
.highlight {
  font-weight: bold;
  background: pink;
}
.line-through {
  text-decoration: line-through;
}
</style>
