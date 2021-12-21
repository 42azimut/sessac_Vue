<template>
  <BasicLayout
    @menuSelect="
      (item) => {
        content = item;
      }
    "
  >
    <MainContents :content="content" />
  </BasicLayout>
</template>

<script>
import BasicLayout from "./components/layouts/BasicLayout.vue";
import MainContents from "./components/layouts/MainContents";

export default {
  name: "App",
  components: {
    BasicLayout,
    MainContents,
  },
  data() {
    return {
      content: {
        label: "대시보드",
        index: "DashBoard",
        path: "main",
      },
    };
  },
};
</script>

<style></style>
