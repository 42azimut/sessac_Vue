<template>
  <h2 class="content-title">{{ content.label }}</h2>
  <component :is="componentId"></component>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "MainContents",
  props: {
    content: {
      type: Object,
      default() {
        return {
          label: "Test Menu",
          path: "test",
          index: "TestMenu",
        };
      },
    },
  },
  data() {
    return {
      targetComponent: null,
    };
  },
  watch: {
    content: {
      deep: true,
      handler: function (newValue) {
        this.targetComponent = defineAsyncComponent(() =>
          import(`@/components/${newValue.path}/${newValue.index}`)
        );
      },
    },
  },
};
</script>

<style></style>
