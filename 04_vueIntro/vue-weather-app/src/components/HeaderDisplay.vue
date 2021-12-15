<template>
  <header class="header">
    <h2>Weather Application</h2>
    <p>{{ username }} 반갑습니다!</p>
  </header>
</template>

<script>
export default {
  name: "HeaderDisplay",
};
</script>

<style scoped>
.header {
  background: linear-gradient(45deg, #00f260, #0575e6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
}

.header h2 {
  color: #fff;
}
.header p {
  font-size: 12px;
  color: #fff;
}
</style>
