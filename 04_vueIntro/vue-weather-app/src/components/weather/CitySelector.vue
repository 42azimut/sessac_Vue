<template>
  <div>
    <ul class="city-selector">
      <li
        @click="selectCity(city)"
        :class="{ isSelected: city.selected }"
        v-for="city in cities"
        :key="city.code"
      >
        {{ city.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CitySelector",
  data() {
    return {
      cities: [
        { code: "Seoul", label: "서울", selected: false },
        { code: "Tokyo", label: "도쿄", selected: false },
        { code: "London", label: "런던", selected: false },
        { code: "Moscow", label: "모스크바", selected: false },
        { code: "Los Angelse", label: "로스앤젤레스", selected: false },
        { code: "New York", label: "뉴욕", selected: false },
        { code: "San Francisco", label: "샌프란시스코", selected: false },
        { code: "Vancouver", label: "밴쿠버", selected: false },
      ],
    };
  },
  methods: {
    selectCity(city) {
      city.selected = !city.selected;
      this.$emit("selectCity", city);
    },
  },
};
</script>

<style scoped>
.city-selector {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
.city-selector li {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.05em solid #efefef;
  padding: 0.3em;
  cursor: pointer;
}
.isSelected {
  background: #fd1d1d;
  color: #fff;
}
</style>
