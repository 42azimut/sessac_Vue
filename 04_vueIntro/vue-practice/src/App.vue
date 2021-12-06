<template>
  <div>
    <h1>Hello Vue JS! 31. 조건부 리스트 랜더링</h1>
    <ul>
      <template v-for="(city, index) in cities" :key="index">
        <li v-if="city.province === '경상도'">
          {{ city.name }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cities: [
        { name: "서울", province: "경기도" },
        { name: "대전", province: "충청도" },
        { name: "부산", province: "경상도" },
        { name: "경주", province: "경상도" },
        { name: "송도", province: "경기도" },
        { name: "광주", province: "전라도" },
      ],
    };
  },
};
</script>

<style>
#title {
  color: red;
  background: yellow;
}

#content {
  color: blue;
  background: pink;
}
</style>
