<template>
  <div>
    <h2 v-bind="$attrs">Hello {{ username }}!</h2>
    <h3>오늘이 {{ numberOfVisit }} 번째 방문입니다.</h3>
    <h3>사이트 이름은 {{ siteInfo.name }} 입니다.</h3>
  </div>
</template>
<script>
export default {
  name: "Greeting User",
  inheritAttrs: false,
  props: {
    username: String,
    numberOfVisit: {
      type: Number,
      default: 0,
    },
    siteInfo: {
      type: Object,
      default: () => {
        return { name: "-", teacher: "-" };
      },
    },
  },
};
</script>
<style scoped></style>
